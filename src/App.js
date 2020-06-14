import './App.css';
import React from 'react';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpenses} from './components/IncomeExpenses'
import {TransactionList} from './components/TransactionList'
import {AddTransaction} from './components/AddTransaction'

import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider> 
      <Header />
      <div class="container">
        <div className="row">
          <div className="column borderright">
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
          </div>
          <div className="column">
            <AddTransaction/>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
