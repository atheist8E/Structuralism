def extract_alphabet(message):
  refine_message = ""
  for char in message:
    if char.isalpha():
      refine_message += char
  return refine_message