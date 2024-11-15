def func(refined_message: str, state: str):
    response = refined_message + "_executed" + "_state_{}".format(state)
    return response