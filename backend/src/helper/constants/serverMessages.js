import { envSecrets } from "./constants.js"

const {backendPort} = envSecrets; 

export const serverMessages = Object.freeze({
databaseMessages:{
    setupMessage:{
        success:'Successfully setup database connection with server',
        error:'Error while setup connection between database and server'
    },
    connectionMessage:{
        success:'Successfully connected with database',
        error:'Error while connect with database'
    }, 
},
appMessages:{
        appListenMessage:'Your server is ready and up'
    }
})