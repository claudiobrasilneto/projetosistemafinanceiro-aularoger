const dummyTransactions = [
    { id: 1, name: 'bolo de brigadeiro', amount: -20 },
    { id: 2, name: 'Salário', amount: 300 },
    { id: 3, name: 'torta', amount: -20 },
    { id: 4, name: 'bolo de brigadeiro', amount: -20 }
    
]

const addTransactionIntoBOM = transaction => {
const operator = transaction.amount < 0 ? '-' : '+'
const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
const amountWithoutOperator = Math.abs(transaction.amount)
const li = document.createElement('li')

li.classList.add(CSSClass)
li.innerHTML = ´ ${transaction.name} <><span> ${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button></></button>´
}



addTransactionIntoBOM(dummyTransactions[1])