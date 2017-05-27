FROM node:6
COPY / /alpha
WORKDIR "/alpha"
RUN npm install && \
    npm run build
EXPOSE 8080