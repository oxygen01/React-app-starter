# base image
FROM node:11.10

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile

# node_modules will not be overwritten since it is expluded via .dockerignore
COPY . /app/

# We do not always want to run npm build as part of the docker build process, e.g. not for feature branches or locally.
# default argument when not provided in the --build-arg. By default we do not run the npm build task.
ARG npmbuild=false

RUN if [ "${npmbuild}" != "false" ]; \
	then \
	yarn build; \
	fi

EXPOSE 3000

# For local development run `yarn start`
CMD ["serve", "-s", "-l", "3000", "build"]
