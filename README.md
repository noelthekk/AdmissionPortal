# AdmissionPortal
4th Year Project

# To Run Docker 

first build the image,
"docker build -t image_name ."

then run the iage and map ports.
"docker run --name container_name -p 3000:3000 -d image_name"

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
