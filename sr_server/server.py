from urllib import response
from flask import Flask, request, jsonify
from flask_cors import CORS
import main

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def get_stocks():
    data = request.get_json()
    result = main.main(data)
    return jsonify(result)
