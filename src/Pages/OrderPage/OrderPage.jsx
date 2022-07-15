import { OrderProducts, TotalResult } from 'components'
import { StyledForm, UserDataWrapper, StyledInput } from "./OrderPage.styled";
import { Formik } from 'formik'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendOrder } from 'API/OrdersAPI'
import Notiflix from 'notiflix';


export default function OrderPage ({order, setOrder, onOrderInputChange}) {

    const navigate = useNavigate();
    const [total, setTotal] = useState(null);


    function totalAmountCalculation (data) {
        return data.reduce((count, item) => count += item.totalPrice, 0);
    }
    useEffect(() => {
        totalAmountCalculation(order);
        setTotal(totalAmountCalculation(order));
    }, [order])

    async function onFormSubmit ({userName, email, phone, adress}, {resetForm}) {
   
        const userData = {
            name: userName,
            email, 
            phone, 
            adress,
            totalPrice: totalAmountCalculation(order),
            userOrder: order,
        } 



        try {
            const response = await sendOrder(userData);

            if (response.status === 200) {   
                setOrder([]);
                resetForm();
                navigate("/order-confirm")
                return
            } else {
                throw new Error(response.data.message)
            }

            
            
        } catch (error) {
            Notiflix.Notify.failure(`${error}`);
        }
        
        
    };


    return (
        <Formik initialValues={{userName:"", email:"", phone: "", adress: ""}} onSubmit={onFormSubmit}>
            <StyledForm >
                <div style={{display: "flex"}}>

                <UserDataWrapper>

                    <label>
                        Name:
                        <StyledInput type="text" name="userName"/>
                    </label>

                    <label>
                        Email:
                        <StyledInput type="email" name="email"/>
                    </label>

                    <label>
                        Phone:
                        <StyledInput type="tel" name="phone"/>
                    </label>

                    <label>
                        Adress:
                        <StyledInput type="text" name="adress"/>
                    </label>

                    </UserDataWrapper>

                    <OrderProducts order={order} onOrderInputChange={onOrderInputChange}/>

                    

                </div>
                
                <TotalResult total={total}/>
                    

            </StyledForm>
        </Formik>
        
    )
}