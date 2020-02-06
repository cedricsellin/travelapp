FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json .
RUN npm install
COPY . . 
EXPOSE 8080

ENV DARKSKY_KEY=${DARKSKY_KEY}
ENV GEONAME_USERNAME=${GEONAME_USERNAME}
ENV PIXABAY_KEY=${PIXABAY_KEY}

CMD npm run start

