from pandas import DataFrame
from pandas import Series
from pandas import concat
from pandas import read_csv
from datetime import datetime
from pandas import Grouper
from sklearn.metrics import mean_squared_error
from sklearn.preprocessing import MinMaxScaler
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import LSTM
from keras import models
from math import sqrt
import numpy
from pickle import load

# date-time parsing function for loading the dataset
def parser2(x):
  return datetime.strptime(x, '%Y-%m-%d')


# frame a sequence as a supervised learning problem
def timeseries_to_supervised(data, lag=1):
	df = DataFrame(data)
	columns = [df.shift(i) for i in range(1, lag+1)]
	columns.append(df)
	print(type(columns))
	df = concat(columns, axis=1)
	df.fillna(0, inplace=True)
	return df

# create a differenced series
def difference(dataset, interval=1):
	diff = list()
	for i in range(interval, len(dataset)):
		value = dataset[i] - dataset[i - interval]
		diff.append(value)
	return Series(diff)

# scale train and test data to [-1, 1]
def scale(validation):
	# fit scaler
	scaler = load(open(data_prep_location + 'scaler.pkl', 'rb'))
	# transform validation
	validation = validation.reshape(validation.shape[0], validation.shape[1])
	validation_scaled = scaler.transform(validation)
	# transform test
	return scaler, validation_scaled

# inverse scaling for a forecasted value
def invert_scale(scaler, X, value):
	new_row = [x for x in X] + [value]
	array = numpy.array(new_row)
	array = array.reshape(1, len(array))
	inverted = scaler.inverse_transform(array)
	return inverted[0, -1]

# make a one-step forecast
def forecast_lstm(model, batch_size, X):
	X = X.reshape(1, 1, len(X))
	yhat = model.predict(X, batch_size=batch_size)
	return yhat[0,0]

# directories and parameters

data_location = '/app/Data/'
model_location = '/app/Model/'
data_prep_location = '/app/DataObjects/'

# load dataset
series = read_csv(data_location + 'Formatted-Data.csv', header=0, parse_dates=[0], index_col=0, date_parser=parser2).squeeze("columns")

# transform data to be stationary
raw_values = series.values
diff_values = difference(raw_values, 1)

# transform data to be supervised learning
supervised = timeseries_to_supervised(diff_values, 1)
supervised_values = supervised.values

window = supervised_values[-12:]

# transform the scale of the data
scaler, window_scaled = scale(window)

# load the model
lstm_model = models.load_model(model_location)
	
X = window_scaled[-1, -1:]
yhat = forecast_lstm(lstm_model, 1, X)
yhat = invert_scale(scaler, X, yhat)
yhat += raw_values[-1]

yhat = round(yhat)

print(yhat)