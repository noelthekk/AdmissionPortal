from pandas import DataFrame
from pandas import Series
from pandas import read_csv
from pandas import Grouper
from datetime import datetime


# date-time parsing function for loading the dataset
def parser(x):
  x = x[:-4]
  return datetime.strptime(x, '%Y-%m-%dT%H:%M:%S')

data_location = '/app/Data/'

def prepare():
  series = read_csv(data_location + 'lacity.org-website-traffic.csv', header=0, index_col=0, parse_dates=[0], date_parser=parser)

  series.drop(columns=['Device Category', 'Browser', 'Sessions', 'Bounce Rate'], inplace=True)
  series = series.groupby(Grouper(freq='D')).sum()
  series.to_csv(data_location + 'Formatted-Data.csv')