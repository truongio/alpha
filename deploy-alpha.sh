git pull -r
rm -rf node_modules
npm install && npm install --production && npm run build

GIT_REVISION=`git rev-parse HEAD`
docker build -t gcr.io/alpha-168912/alpha:${GIT_REVISION} .
gcloud docker -- push gcr.io/alpha-168912/alpha:${GIT_REVISION}
kubectl set image deployment/alpha alpha=gcr.io/alpha-168912/alpha:${GIT_REVISION}