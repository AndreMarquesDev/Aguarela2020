FROM mcr.microsoft.com/playwright:v1.33.0-focal

USER root

WORKDIR /home/app

# copy app to VM
COPY . /home/app
# install node modules
RUN yarn
# build app
RUN yarn build
