import { ShopButton, ShopListItem, ShopList } from "./ShopsCollection.styled";


export const ShopsCollection = ({storesData, setCurrentShop}) => {

function onSelectedShop (event) {
    const selectedShop = event.target.dataset.currentshop
    setCurrentShop(selectedShop)
}



    return (

            <ShopList>
                {storesData !== null && storesData.map(item => {
                    return (
                        <ShopListItem key={item.shop}>
                            <ShopButton type="button" data-currentshop={item.shop} onClick={onSelectedShop}>{item.shop}</ShopButton>
                        </ShopListItem>
                    )
                })}
            </ShopList>

    )
}

