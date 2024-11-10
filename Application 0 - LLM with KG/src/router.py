import uvicorn
import executer
import interpreter
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

def refine(message: str):
    refined_message = interpreter.extract_alphabet(message)
    return refined_message

def execute(refined_message: str):
    response = executer.func(refined_message)
    return response

@app.get("/message_from_user/{message}")
def message_from_user(message: str):
    refined_message = refine(message)
    response = execute(refined_message)
    return {"message": message, "response": response}

if __name__ == "__main__":
    uvicorn.run(app, host = "0.0.0.0", port = 8000)