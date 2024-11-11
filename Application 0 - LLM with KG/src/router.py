import uvicorn
import executer
import interpreter
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

#################################### Deal with Human Language ####################################

def refine(message: str, state: str):
    refined_message = interpreter.refine(message, state)
    return refined_message

def action(refined_message: str, state: str):
    response = executer.func(refined_message, state)
    return response

def validate(response, state: str):
    next_state = None
    if state == "summarize_sentence":
        next_state = "extract_keyword"
    elif state == "extract_keyword": 
        next_state = "convert_question_to_choice"
    elif state == "convert_question_to_choice": 
        next_state = "finish"
    return next_state

@app.get("/message_from_user/{message}")
def message_from_user(message: str):
    current_state = "summarize_sentence"
    next_state = ""
    while True:
        if current_state == "finish":
            break
        refined_message = refine(message, current_state)
        response = action(refined_message, current_state)
        next_state = validate(response, current_state)
        current_state = next_state
    return {"message": message, "response": response}

if __name__ == "__main__":
    uvicorn.run(app, host = "0.0.0.0", port = 8000)