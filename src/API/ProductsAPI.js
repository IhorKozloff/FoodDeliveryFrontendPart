import axios from "axios";


export async function getAllProducts () {
    try {
        const products = await axios.get("https://food-delivery-backend-project.herokuapp.com/products");
        return products
    }
    catch (error) {
        console.log(error)
    }
}