import axios from "axios";


export async function getAllProducts () {
    try {
        const products = await axios.get("http://localhost:3001/products");
        return products
    }
    catch (error) {
        console.log(error)
    }
}