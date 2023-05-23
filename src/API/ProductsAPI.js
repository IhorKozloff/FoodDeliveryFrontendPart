import axios from "axios";


export async function getAllProducts () {
    try {
        const products = await axios.get("https://fooddeliveryserver-vcce.onrender.com/products");
        return products
    }
    catch (error) {
        console.log(error)
    }
}