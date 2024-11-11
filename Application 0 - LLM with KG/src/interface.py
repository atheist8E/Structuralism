import time
import random
import requests
import streamlit as st

def get_response(message: str):
    response = requests.get(f'http://127.0.0.1:8000/message_from_user/{message}')
    return response.json()

def init():
    st.title("Zen")
    if "messages" not in st.session_state:
        st.session_state.messages = []
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

def chat():
    if prompt := st.chat_input("Type your message"):
        with st.chat_message("user"):
            st.markdown(prompt)
        st.session_state.messages.append({"role": "user", "content": prompt})
        with st.chat_message("assistant"):
            response = get_response(prompt)
            st.markdown(response)
        st.session_state.messages.append({"role": "assistant", "content": response})

if __name__ == "__main__":
    init()
    chat()