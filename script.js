const dummyTransactions = [
    { id: 1, name: 'bolo de brigadeiro', amount: -20 },
    { id: 2, name: 'Salário', amount: 300 },
    { id: 3, name: 'torta', amount: -20 },
    { id: 4, name: 'bolo de brigadeiro', amount: -20 }
    
]

const addTransactionIntoBOM = transaction => {
 const operator = transaction.amount < 0 ? '-' : '+'
 console.log(operator)
   /* <li class="minus">
        Salário <span>-$400</span><button class="delete-btn">x</button</button>
    </li> */
}



addTransactionIntoBOM(dummyTransactions[1])

// isso é um teste para nova versão