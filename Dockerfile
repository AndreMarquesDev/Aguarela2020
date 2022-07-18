FROM ubuntu:latest

USER root

WORKDIR /home/app

# install/update dependencies
RUN apt-get update
# install curl, wget and Cypress dependencies (https://docs.cypress.io/guides/continuous-integration/introduction#Dependencies)
RUN apt-get -y install curl gnupg wget libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
# get Node
RUN curl -sL https://deb.nodesource.com/setup_14.x  | bash -
# install Node
RUN apt-get -y install nodejs
# install yarn
RUN npm install -g yarn
# copy app to VM
COPY . /home/app
# install node modules and build app
RUN yarn
RUN yarn build