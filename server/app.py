from flask import Flask,request,jsonify
from flask_cors import CORS
from youtube_transcript_api import YouTubeTranscriptApi as yta
import re
import difflib

app=Flask(__name__)
CORS(app)

@app.route("/")
def index():
    video_id="97V4BhuN2X8"
    data= yta.get_transcript(video_id)
    transcript= ""
    for value in data:
        for key,val in value.items():
            if key== "text":
                transcript += val
    print(transcript)
    return jsonify({
            'text':transcript
        })

def calculate_similarity(original_answer, user_answer):
    similarity = difflib.SequenceMatcher(None, original_answer, user_answer).ratio()
    return similarity

def evaluate_accuracy(original_answer, user_answer, threshold=0.7):
    similarity = calculate_similarity(original_answer, user_answer)
    return similarity

@app.route("/compare",methods=['POST'])
def compare():
    body=request.json
    og=body.get('og')
    userans=body.get('userans')

    print(og)
    print(userans)

    num=evaluate_accuracy(og,userans)

    if(num>=0.8):
        num=num*100
    else:
        num=(num+0.2)*100
        
    return jsonify({
            'text':num
        })


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=3001)