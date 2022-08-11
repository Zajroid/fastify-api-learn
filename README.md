# Fastify-api by Zajroid

# Installation
```
npm i
```

# Start project
```
npm run start:dev # start dev version app with nodemon

npm run start # start project

npm run build # build project
```

# Tree
```
fastify-api/
├── Dockerfile
├── README.md
├── aws.mk
├── config
│   ├── nginx.conf
│   └── vhost.conf
├── docker-compose.yml
├── gce.mk
├── gulpfile.js
├── nodemon-debug.json
├── nodemon.json
├── ormconfig.ts
├── package-lock.json
├── package.json
├── public
├── request.rest
├── src
│   ├── client
│   │   ├── App.tsx
│   │   ├── assets
│   │   │   └── images
│   │   │       ├── bg
│   │   │       ├── logo
│   │   │       └── pictures
│   │   ├── css
│   │   ├── index.html
│   │   ├── js
│   │   │   └── main.js
│   │   └── scss
│   │       ├── _head.scss
│   │       ├── base
│   │       │   └── _base.scss
│   │       ├── components
│   │       │   ├── _footer.scss
│   │       │   ├── _navbar.scss
│   │       │   └── _sidebar.scss
│   │       ├── config
│   │       │   └── _variables.scss
│   │       ├── index.scss
│   │       └── layout
│   │           └── _layout.scss
│   └── server
│       ├── controllers
│       │   ├── items
│       │   │   └── itemCreate.js
│       │   └── posts
│       │       └── createPostController.js
│       ├── entity
│       ├── items.js
│       ├── middlewares
│       ├── migrations
│       ├── routers
│       │   └── router.js
│       ├── server.js
│       └── test
│           ├── app.e2e-spec.ts
│           └── jest-e2e-spec.ts
├── start-db.sh
├── start.bat
├── terraform-common.mk
├── trvs.mk
├── tsconfig.build.json
├── tsconfig.json
├── tslint.json
└── webpack.config.js
```