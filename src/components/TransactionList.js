import React, {useContext} from 'react'
import {Transaction} from './Transaction'

import {GlobalContext} from '../context/GlobalState'

export const TransactionList = () => {

    const {transactions} = useContext(GlobalContext);

    if(transactions.length < 1)
    {
        return (<div className="transactionlist">
        <h3>All Transactions</h3><h4>No record found</h4></div>)
    }
    
    return (
        <div className="transactionlist">
        <h3>All Transactions</h3>
        <ul id="list" className="list">
            {transactions.map( transaction => (<Transaction key={transaction.id} transaction={transaction} /> ))}
            
        </ul>
        </div>
    )
}
