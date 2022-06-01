import os

result = os.popen("curl localhost:8000/predict").read()

print(int(result.split(" ")[2][:-1]))