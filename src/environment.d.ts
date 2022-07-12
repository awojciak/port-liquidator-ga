// declare global env variable to define types
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PRIV_KEY: string
        CHECK_INTERVAL: string
        CLUSTER_URL: string
        PROGRAM_ID: string
      }
    }
  }
  
  export { };