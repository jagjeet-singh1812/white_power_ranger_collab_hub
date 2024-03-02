from flask import Flask,request,jsonify
from flask_cors import CORS
from youtube_transcript_api import YouTubeTranscriptApi as yta
import re

app=Flask(__name__)

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



CORS(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=3001)