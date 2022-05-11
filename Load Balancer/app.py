import json
from flask import Flask
import predict

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Load Prediction'

@app.route('/predict')
def getPrediction():
    json_data=['2019-01-31']
    json_data.append(predict.predictFunction())
    
    return json.dumps(json_data)



if __name__ == "__main__":
    app.run(host ='0.0.0.0')
