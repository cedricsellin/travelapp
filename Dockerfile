FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json .
#COPY . .
RUN npm install
COPY . . 
RUN npm run build-prod
EXPOSE 8080

ENV DARKSKY_KEY=${DARKSKY_KEY}
ENV GEONAME_USERNAME=${GEONAME_USERNAME}
ENV PIXABAY_KEY=${PIXABAY_KEY}

CMD npm run start

