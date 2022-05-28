import json
from flask import Flask
import data_prep   
import predict
import train
import test

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Load Prediction'

@app.route('/prepare')
def prepareData():
    data_prep.prepare()

    return 'Prepared Data'

@app.route('/predict')
def getPrediction():
    json_data=['Predicted Value']
    json_data.append(predict.predictFunction())
    
    return json.dumps(json_data)

@app.route('/train')
def trainModel():
    json_data=[]
    json_data.append(train.trainFunction())
    
    return json.dumps(json_data)

@app.route('/test')
def testModel():
    json_data=['RMSE: ']
    json_data.append(test.testFunction())

    return json.dumps(json_data)


if __name__ == "__main__":
    app.run(host ='0.0.0.0')
