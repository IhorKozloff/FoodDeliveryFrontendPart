import {TotalResultWrapper, ConfirmOrderButton} from "./TotalResult.style"
import { useState } from "react";


export const TotalResult = ({total}) => {
   




    return (
        <TotalResultWrapper>
            <p>Total price: {total}$</p>
            <ConfirmOrderButton type="submit">Submit</ConfirmOrderButton>
        </TotalResultWrapper>
    )
}