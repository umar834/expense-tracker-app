import React, {useContext} from 'react'
import {GlobalProvider, GlobalContext} from '../context/GlobalState'

export const Balance = () => {

    const {transactions} = useContext(GlobalContext);
    
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div className="balancediv">
            <h1>${total}</h1>
            <h4><span className="dot"></span>Current Balance</h4>
        </div>
    )
}
