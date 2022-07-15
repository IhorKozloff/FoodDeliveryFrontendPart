import { OrderList, OrderListItem, DescritionWrapper, ItemOrderTittle, ItemOrderPrice, ValueInputWrapper, ValueInput, ValueInputButtonSet, ValueInputButton} from "./OrderProducts.styled"

export const OrderProducts = ({order, onOrderInputChange}) => {


    return (
        <>
            
            <OrderList>
                {order && order.map(item => {
                    return(
                        <OrderListItem key={item.id}>
                            <img src={`http://localhost:3001//${item.imageUrl}`} alt="fast-food" width="340" height="220"/>
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