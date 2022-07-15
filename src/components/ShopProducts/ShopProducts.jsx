import { SplashScreen, ShopProductsWrapper, ProductsLisWrapper, ProductsList, ProductsItem, OrderButton, Description, TextWrapper, MealPrice  } from "./ShopProducts.styled"

export const ShopProducts = ({productionData, orderCreator}) => {



    return (
        <ShopProductsWrapper image={productionData !== null && productionData.wallpaper}>
            {productionData === null && <SplashScreen>
                <h1>
                    Select a store <br/>and view <br/>the list of its products
                </h1>
            </SplashScreen>}
            {productionData !== null && 
            <ProductsLisWrapper>
                <ProductsList>
                    {
                        productionData.products.map(({name, price, image, id}) => {
                            return (
                                <ProductsItem key={id}>
                                    <img className="meal-image" src={`http://localhost:3001//${image}`} alt="fast-food" width="340" height="220"/>

                                    <Description>
                                        <TextWrapper>
                                            <p className="meal-title">{name}</p>
                                            <MealPrice className="meal-price">{price}$</MealPrice>
                                        </TextWrapper>
                                        <OrderButton onClick={() => {
                                   
                                            orderCreator({id, shop: productionData.shop, name, price, imageUrl: image})

                                        }}>Add to card</OrderButton>
                                    </Description>
                                    
                                </ProductsItem>
                            )
                        })
                    }
                </ProductsList>
            </ProductsLisWrapper>}
        </ShopProductsWrapper>
        
    )
}