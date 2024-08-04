```
npm install
npm run dev
```

```
open http://localhost:3000
```

npm install @prisma/client

npm run build
pm2 "node dist/index.js"

---------------------------------
## Prisma https://www.prisma.io/docs/orm/prisma-migrate/getting-started

fill prisma/schema.prisma
prisma migrate dev --name init

add to prisma/schema.prisma
prisma migrate dev --name table_name


prisma db pull


---------------------------------
nginx.conf

server {
    listen 80;
    server_name test.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version  1.1;
        proxy_set_header    Upgrade $http_upgrade;
        proxy_set_header    Connection "upgrade";
        proxy_set_header    Host $host;
        proxy_cache_bypass  $http_upgrade;
    }
}
