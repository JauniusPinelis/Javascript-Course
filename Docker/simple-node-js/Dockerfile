# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies (if you had any)
# RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port your application will listen on (if needed)
# EXPOSE 3000

# Define the command to start your Node.js application
CMD [ "npm", "start" ]
