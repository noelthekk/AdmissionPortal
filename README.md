# AdmissionPortal
4th Year Project

# To Run Docker 

first build the image,
"docker build -t image_name ."

then run the iage and map ports.
"docker run --name container_name -p 3000:3000 -d image_name"

# Some config changes to be made in the vite config

because we are using vite instead of create-react-app we have to make the following changes to the vite config file.
in the vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
    fs: {
      strict: false,
    },
  },
  plugins: [react()],
});

# Structre of the Project 

project
├── src
│   └── components
│       └── candidateLogin
│           ├── CandidatePassword.jsx
│           ├── CandidateRegisterationForm.jsx
│           ├── CandidateRegisterationWrapper.jsx
│           ├── CandidateSuccess.jsx
│           └── CandidateVerification.jsx
│
├── server
│   └── sql
│       ├── sql1.sql
│       └── sql2.sql
│
├── Load Balancer
│   ├── Data Objects
│   ├── Model
│   ├── data_prep.py
│   ├── test.py
│   └── train.py
│
├── node_modules
│
├── Dockerfile


The above figure represents the structre of the project. The Candidate registeration app's directory is given above. The CandidateRegisterationWrapper in the candidateLogin file has the wrapper for all the pages in the candidate registration. React Router is used to implement this and make routes to all the other pages defined in the directory.
The "server" file contains the SQL files we have used to make the database scheme. The database system we have chosen as of now is MySQL.
The "Loader Balancer" file contains the files for the code to train and inference of the machine learning model. The saved model is also inside the folder. LSTM (*Long Short Term Memory*) neural network is used to make the model as the data to be forecasted is time series data.
Dockerfile is the file used to define the specification to which the docker container should be made.