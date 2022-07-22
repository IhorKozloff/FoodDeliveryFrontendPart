
import axios from "axios";


export async function sendOrder (reqBody) {
    try {
        const products = await axios.post("https://food-delivery-backend-project.herokuapp.com/accept-order", reqBody);
       return products
    }
    catch (error) {
        return error.response
    }
}