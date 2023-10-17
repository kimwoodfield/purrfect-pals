# use official node image as the base image
FROM node:latest

# set working directory in container
WORKDIR /usr/src/app

# copy package.json and package-lock.json to working directory
COPY package*.json ./

# install dependencies
RUN npm install

# copy the local directory to the working directory
COPY . .

# build the app
RUN npm run build

# run the app
CMD ["npm", "start"]
