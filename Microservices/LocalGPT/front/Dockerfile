# Use an official Node.js runtime as the base image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Angular application
RUN npm run build

# Use a smaller base image for the final container
FROM nginx:alpine

# Copy the built Angular app from the build container to the nginx web server directory
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start the nginx web server
CMD ["nginx", "-g", "daemon off;"]
