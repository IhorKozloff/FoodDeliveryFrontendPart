
import axios from "axios";


export async function sendOrder (reqBody) {
    try {
        const products = await axios.post("https://fooddeliveryserver-vcce.onrender.com/accept-order", reqBody);
       return products
    }
    catch (error) {
        return error.response
    }
}