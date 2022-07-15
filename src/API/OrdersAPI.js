
import axios from "axios";


export async function sendOrder (reqBody) {
    try {
        const products = await axios.post("http://localhost:3001/accept-order", reqBody);
       return products
    }
    catch (error) {
        return error.response
    }
}