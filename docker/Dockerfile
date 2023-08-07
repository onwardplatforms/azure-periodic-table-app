# Use the official Node.js image with Node.js version 16 or higher as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the container's working directory
COPY package.json yarn.lock ./

# Install Node.js dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the container's working directory
COPY . .

# Run the build step for your application (if required)
RUN yarn build

# Expose port 3000 for your Node.js application
EXPOSE 3000

# Define the command to start your Node.js application using Yarn
CMD ["yarn", "start"]