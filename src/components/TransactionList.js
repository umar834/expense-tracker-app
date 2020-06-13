import React, {useContext} from 'react'
import {Transaction} from './Transaction'

import {GlobalProvider, GlobalContext} from '../context/GlobalState'

export const TransactionList = () => {

    const {transactions} = useContext(GlobalContext);
    
    return (
        <div className="transactionlist">
        <h3>All Transactions</h3>
        <ul id="list" className="list">
            {transactions.map( transaction => (<Transaction key={transaction.id} transaction={transaction} /> ))}
            
        </ul>
        </div>
    )
}
