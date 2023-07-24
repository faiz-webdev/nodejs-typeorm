# Also make sure are you using typescript vaersion 3.3 or higher.
  "experimentalDecorators":true, // Enable experimental support for ES7 decorators
  "emitDecoratorMetadta":true
  ```in tsconfig file```

## Setup process step by step
  1. npm init -y
  2. tsc --init
  3. npm i express @types/express nodemon ts-node @types/node typescript
  4. npm i mysql2 typeorm reflect-metadata

## Run migrations
  npm run db:sync