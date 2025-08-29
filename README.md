# Introduction 
**DECARD** brand website. React / NextJS. Developed with ❤️

# Getting Started
For HTTPs Local certificates ask Vlady or generate your own local ssl certificate and add them to `/certificates` folder: 
```
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -days 365 \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

# Build and Test
- Run local dev mode - `npm run start:dev`
- Make local build – `npm run build`
- Export static build – `npm run build:prod`

deployed on Vercel (check account)
