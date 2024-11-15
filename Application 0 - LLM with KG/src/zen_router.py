import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

#################################### Deal with Human Language ####################################

class payload_from_interface_to_router(BaseModel):
    message: str

@app.post("/from_interface_to_router/")
def from_interface_to_router(payload: payload_from_interface_to_router):
    message = payload.message
    state = "from_interface_to_router"
    while True:
        if state == "finish":
            break
        state = "finish"
    return {"message": message[::-1]}

if __name__ == "__main__":
    uvicorn.run(app, host = "0.0.0.0", port = 8000)