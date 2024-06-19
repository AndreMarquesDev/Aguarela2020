FROM mcr.microsoft.com/playwright:v1.36.1-focal

WORKDIR /home/app

# have to explicitly copy the .yarn folder first for some reason https://stackoverflow.com/a/71000794/7643841
COPY .yarn ./.yarn

# copy package.json and yarn.lock to install dependencies first so that changes to the source files don't make this layer rerun
COPY package.json yarn.lock .yarnrc.yml .

# install dependencies
RUN yarn --immutable

# copy whole app to VM
COPY . .

# build the app
RUN yarn build
