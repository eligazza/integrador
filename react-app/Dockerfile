# Use an official Node.js runtime as a parent image
FROM node:14 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY ./react-app/package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY ./react-app/ ./

# Build the React app for production
RUN npm run build

# Use a lightweight Nginx image as the final base image
FROM nginx:1.21

# Remove the default Nginx configuration
RUN rm -v /etc/nginx/nginx.conf

# Copy the custom Nginx configuration
COPY ./nginx.conf /etc/nginx/

# Copy the built React app files from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

