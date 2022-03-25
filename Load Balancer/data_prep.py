from pandas import DataFrame
from pandas import Series
from pandas import read_csv
from pandas import Grouper
from datetime import datetime


# date-time parsing function for loading the dataset
def parser(x):
  x = x[:-4]
  return datetime.strptime(x, '%Y-%m-%dT%H:%M:%S')

data_location = './Data/'


series = read_csv(data_location + 'lacity.org-website-traffic.csv', header=0, index_col=0, parse_dates=[0], date_parser=parser)

series.drop(columns=['Device Category', 'Browser', 'Sessions', 'Bounce Rate'], inplace=True)
series = series.groupby(Grouper(freq='M')).sum()
series.drop(['2019-01-31', '2019-02-28', '2019-03-31', '2019-04-30', '2019-05-31', '2019-06-30', '2019-07-31', '2019-08-31'], inplace=True)
series.to_csv(data_location + 'Formatted-Data.csv')