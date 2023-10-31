# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Build your React app
RUN npm run build

# Expose a port if your React app runs on a specific port
EXPOSE 4173

# Define the command to run your application
CMD ["npm", "run", "preview"]
