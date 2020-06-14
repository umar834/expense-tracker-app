import React, {useState, useContext} from 'react'

import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {

    const {addTransaction} = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
    return (
        <div className="newtrans">
             <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label>Name</label>
                    <input required type="text" value={text} onChange={
                        (e) => setText(e.target.value)
                    }/>
                   
                </div>
                <div style={{marginTop: 20}} className="form-control">
                <label>Amount(+ for Income & - for Expense)</label>
                    <input required type="number" value={amount} onChange={
                        (e) => setAmount(e.target.value)
                    } />
                    
                </div>
                <button style={{marginTop: 20}} className="button dark">Add transaction</button>
            </form>
        </div>
    )
}
