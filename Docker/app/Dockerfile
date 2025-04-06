FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY server.js server.js
# COPY . .

ENTRYPOINT [ "node", "server.js" ]

# Multi-stage builds

# FROM ubuntu as build

# RUN apt-get update
# RUN apt-get install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
# RUN apt-get upgrade -y
# RUN apt-get install -y nodejs
# RUN apt-get install typescript

# WORKDIR /app

# COPY package.json package.json
# COPY package-lock.json package-lock.json

# RUN npm install
# RUN tsc -p . #build


# FROM node as runner

# WORKDIR app/

# COPY --from=build app/

# ENTRYPOINT [ "node", "server.js" ]