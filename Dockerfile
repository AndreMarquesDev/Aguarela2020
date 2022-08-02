FROM cypress/browsers:node14.17.6-slim-chrome100-ff99-edge

USER root

WORKDIR /home/app

# copy app to VM
COPY . /home/app
# install node modules
RUN yarn
# build app
RUN yarn build
