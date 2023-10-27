# Use an official Node.js runtime as the base image
FROM node:18.14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all app files to the container
COPY . .

# Build the React app (replace with the appropriate Vite build command)
RUN npm run build

# Expose a port (e.g., 80)
EXPOSE 80

# Define the command to run your app
CMD [ "npm", "run", "dev" ]
