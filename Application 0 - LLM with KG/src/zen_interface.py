import json
import requests
import streamlit as st

from zen_utils import json_packaging

def from_interface_to_router(message: str):
    payload = json_packaging(message)
    response = requests.post(f'http://127.0.0.1:8000/from_interface_to_router/', data = payload)
    return json.loads(response.content)["message"]

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
            message = from_interface_to_router(prompt)
            st.markdown(message)
        st.session_state.messages.append({"role": "assistant", "content": message})

if __name__ == "__main__":
    init()
    chat()