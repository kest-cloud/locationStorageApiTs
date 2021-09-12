declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV:'development';
        PORT?: 5000;
        DATABASE:'mongodb+srv://kest:9PtM95azSnQ0XgZf@cluster0.nfqpu.mongodb.net/test';
        DATABASE_PASSWORD:`9PtM95azSnQ0XgZf`;
      }
    }
  }

  export{}