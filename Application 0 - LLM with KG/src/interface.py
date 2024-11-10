import time
import random
import requests
import streamlit as st

def get_response(message: str):
    response = requests.get(f'http://127.0.0.1:8000/message_from_user/{message}')
    return response.json()

def init():

    st.title("Zen")

    # Initialize chat history
    if "messages" not in st.session_state:
        st.session_state.messages = []

    # Display chat messages from history on app rerun
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

def chat():

    # Accept user input
    if prompt := st.chat_input("Type your message"):
        # Display user message in chat message container
        with st.chat_message("user"):
            st.markdown(prompt)
        # Add user message to chat history
        st.session_state.messages.append({"role": "user", "content": prompt})

        # Display assistant response in chat message container
        with st.chat_message("assistant"):
            response = get_response(prompt)
            st.markdown(response)
        # Add assistant response to chat history
        st.session_state.messages.append({"role": "assistant", "content": response})

if __name__ == "__main__":
    init()
    chat()