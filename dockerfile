# Make folder to put our files in
# Set working directory so that all subsequent command runs in this folder
FROM node:18-alpine

WORKDIR /app
# Copy package json and install dependencies
COPY package*.json ./
RUN npm ci
# Copy our app
COPY . .
# Command to run our app
CMD [ "npm", "start"]
# Expose port to access server
EXPOSE 5000