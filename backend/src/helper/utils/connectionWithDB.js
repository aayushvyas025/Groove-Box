import { envSecrets } from "../constants/constants.js";
import { serverMessages } from "../constants/serverMessages.js";
import { connectDatabase } from "../../config/database.js";

const { backendPort } = envSecrets;
const { appMessages, databaseMessages } = serverMessages;
const {connectionMessage} = databaseMessages;

export const connectionWithDB = (app) => {
  connectDatabase()
    .then(() => {
      app.listen(backendPort, () => console.log (`${appMessages.appListenMessage}: http://localhost:${backendPort}`));
    })
    .catch((error) => {
      console.log(`${connectionMessage.error}: ${error.message}`);
    })
    .finally( () => console.log(connectionMessage.success)
    );
};
