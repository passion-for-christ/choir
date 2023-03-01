## Deploy WINDOWS
docker login pfcseattle.azurecr.io / f+h4J3bwZWk5pMOAnw1zkWZu0cQz01u2

CHOIR API
docker build --no-cache -t pfcseattle.azurecr.io/pfc-choir-api:v1.0-022723 .
docker push pfcseattle.azurecr.io/pfc-choir-api:v1.0-022723

CHOIR CLIENT
docker build --no-cache -t pfcseattle.azurecr.io/pfc-choir-client:v1.0-022723 .
docker push pfcseattle.azurecr.io/pfc-choir-client:v1.0-022723

docker logout pfcseattle.azurecr.io