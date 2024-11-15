import json

def is_json_object(object):
    try:
        json.loads(object)
    except ValueError as e:
        return False
    return True

def json_packaging(message):
    if is_json_object(message):
        return message
    else:
        if isinstance(message, dict):
            return json.dumps(message)
        else:
            return json.dumps({"message": message})