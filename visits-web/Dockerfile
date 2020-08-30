FROM node:alpine

# Copy the web app to the work directory of the image 
WORKDIR /usr/visits-web-app
# to reduce rebuilds copy the package.json to install the dependencies 
COPY ./package.json ./
# install required node dependencies if there are changes on package.json
RUN npm install
# now copy the app, so only in case of new dependencies we have to download them 
COPY ./ ./

#Start the app
CMD ["npm", "start"]