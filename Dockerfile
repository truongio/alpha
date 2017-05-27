FROM node:6
COPY . /alpha
WORKDIR "/alpha"
RUN npm install && \
    npm install --production && \
    npm run build

FROM nginx
COPY dist /usr/share/nginx/html

EXPOSE 8080