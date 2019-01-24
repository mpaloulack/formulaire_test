FROM node:latest

# Create app directory
RUN mkdir /app
WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./

# Install libraries
RUN npm install -g @angular/cli
RUN npm install 

# Bundle app source
COPY . .

# Build dist folder

CMD [ "ng", "serve" ]

EXPOSE 4200