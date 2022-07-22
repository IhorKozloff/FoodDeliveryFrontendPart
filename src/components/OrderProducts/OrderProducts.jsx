import { OrderList, RemoveItemBtn, OrderListItem, DescritionWrapper, ItemOrderTittle, ItemOrderPrice, ValueInputWrapper, ValueInput, ValueInputButtonSet, ValueInputButton} from "./OrderProducts.styled"

export const OrderProducts = ({order, setOrder, onOrderInputChange}) => {


    return (
        <>
            
            <OrderList>
                {order && order.map(item => {
                    return(
                        <OrderListItem key={item.id}>
                            
                            <img src={`https://food-delivery-backend-project.herokuapp.com/${item.imageUrl}`} alt="fast-food" width="340" height="220"/>
                            <DescritionWrapper>
                                <ItemOrderTittle>{item.name}</ItemOrderTittle>
                                <ItemOrderPrice>Price: {item.totalPrice}$</ItemOrderPrice>
                                <ValueInputWrapper>
                                    <ValueInput 
                                        type="text" 
                                        name={item.id} 
                                        value={item.count}
                                    >
                                        
                                    </ValueInput>
                                    <ValueInputButtonSet>
                                        <ValueInputButton type="button" appointment="increment" onClick={() => {
                                            onOrderInputChange("increment", item.id)
                                        }}>+</ValueInputButton>
                                        {item.count > 1 && <ValueInputButton type="button" appointment="decrement" onClick={() => {
                                            onOrderInputChange("decrement", item.id)
                                        }}>-</ValueInputButton>}
                                        <RemoveItemBtn type="button" onClick={() => {
                                setOrder(order.filter(itemInOrder => itemInOrder.id !== item.id))
                            }}>Remove</RemoveItemBtn>
                                    </ValueInputButtonSet>
                                    
                                </ValueInputWrapper>
                                
                            </DescritionWrapper>
                        </OrderListItem>
                    )
                })}
            </OrderList>
            
        </>
    )
}