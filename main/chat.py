# import ollama
# import pyttsx3
# import speech_recognition as sr
# import sys
# from json import dumps
# from threading import Thread
#
# engine = pyttsx3.init()
# recognizer = sr.Recognizer()
#
# messages = []
#
# def send_message(message, type):
#     print(
#         dumps({
#             'message': message,
#             'type': type
#         })
#     )
#
#     sys.stdout.flush()
#
#
# def lister_audio():
#     with sr.Microphone() as source:
#         recognizer.adjust_for_ambient_noise(source, duration=.5)
#         audio = recognizer.listen(source)
#
#         return audio
#
#
# def recognize_text(audio: sr.AudioData) -> str:
#     text = recognizer.recognize_google(audio)
#
#     return text
#
#
# def speak_stream(stream):
#     response = ''
#     final_response = ''
#
#     for chunk in stream:
#         if '.' in chunk['message']['content'] or '!' in chunk['message']['content'] or '?' in chunk['message']['content'] or len(response.split(' ')) > 20:
#             engine.say(response)
#             engine.runAndWait()
#
#             final_response += response
#             response = ''
#
#         else:
#             response += chunk['message']['content']
#
#     return final_response
#
# send_message('Python booted', 'boot')
#
# while True:
#     audio = lister_audio()
#
#     try:
#         text = recognize_text(audio)
#
#         send_message(text, 'user_text')
#
#         messages.append({
#             'role': 'user',
#             'content': text
#         })
#
#         stream = ollama.chat(
#             model='llama3.2',
#             messages=messages,
#             stream=True
#         )
#
#         response = speak_stream(stream)
#
#         send_message(response, 'assistant_response')
#
#         messages.append({
#             'role': 'assistant',
#             'content': response
#         })
#
#     except sr.UnknownValueError:
#         pass
#
#     except sr.RequestError as e:
#         pass

import pyttsx3
from time import sleep

engine = pyttsx3.init()

sleep(15)

engine.setProperty('rate', 100)

engine.say("Hello")
engine.runAndWait()

engine.setProperty('rate', 300)

engine.say("Fa... Fa... Fa...")
engine.runAndWait()

engine.setProperty('rate', 100)

engine.say("Father")
engine.runAndWait()

sleep(2)