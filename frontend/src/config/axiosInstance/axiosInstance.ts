import { envSecrets } from "@/helper/constant";
import axios, {type AxiosInstance} from "axios";

const {backendUrl} = envSecrets; 

const API:AxiosInstance = axios.create({
    baseURL:backendUrl,
    withCredentials:true 
}); 

export default API; 