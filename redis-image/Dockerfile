# use existing image as base image 
FROM alpine

# download and install dependencies
RUN apk add --update redis 
# RUN apk add --update gcc

# startup commands when the container is started 
CMD ["redis-server"]