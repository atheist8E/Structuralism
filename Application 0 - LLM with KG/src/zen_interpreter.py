def extract_keyword(message):
    return message[0]

def summarize_sentence(message):
    return message[0:1]

def convert_question_to_choice(message):
    return message[::-1]

def refine(message: str, state: str):
    if state == "summarize_sentence":
        refined_message = summarize_sentence(message)
    elif state == "extract_keyword": 
        refined_message = extract_keyword(message)
    elif state == "convert_question_to_choice":
        refined_message = convert_question_to_choice(message)
    return refined_message