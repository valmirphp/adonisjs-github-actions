FROM node:10-alpine

LABEL version="0.0.1"
LABEL repository="https://github.com/valmirphp/adonisjs-github-actions"
LABEL homepage="https://github.com/valmirphp/adonisjs-github-actions"
LABEL maintainer="Valmir Barbosa <valmir.php@gmail.com>"

LABEL "com.github.actions.name"="Run Adonis Config"
LABEL "com.github.actions.description"="Run Adonis setup and tests."
LABEL "com.github.actions.icon"="circle"
LABEL "com.github.actions.color"="purple"

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]
