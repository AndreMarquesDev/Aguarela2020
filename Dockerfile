FROM cypress/browsers:node16.18.0-chrome107-ff106-edge

USER root

WORKDIR /home/app

# copy app to VM
COPY . /home/app
# install node modules
RUN yarn
# build app
RUN yarn build
