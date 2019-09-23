FROM node:10-alpine

# ------------------------------------------
# change the working directory
# ------------------------------------------
WORKDIR /node-app

COPY package.json yarn.lock ./

# ------------------------------------------
# install the adonis CLI and dependences
# ------------------------------------------
RUN yarn global add @adonisjs/cli --non-interactive --silent && \
    yarn install --non-interactive --silent

# ------------------------------------------
# Expose port 3333
# ------------------------------------------
EXPOSE 3333

CMD adonis serve --dev
