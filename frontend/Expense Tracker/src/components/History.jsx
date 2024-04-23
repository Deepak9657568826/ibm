import React, { useState, useEffect } from 'react';

function History() {
    const [transactions, setTransactions] = useState([]);
    const [filteredType, setFilteredType] = useState('');
    const [sortOrder, setSortOrder] = useState('Ascending');

    useEffect(() => {
        fetchTransactions();
    }, []);
    const url = `https://mock-final-server-api.onrender.com/${filteredType || `income`}`
    console.log(url);
    const fetchTransactions = () => {
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                setTransactions(data)
                console.log(data);
            } )
            .catch(error => console.error('Error fetching transactions:', error));
    };

    const handleDelete = (id) => {
        
        fetch(`https://mock-final-server-api.onrender.com/${filteredType || `income`}/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                
                    setTransactions(transactions.filter(transaction => transaction.id !== id));
                } else {
                    console.error('Failed to delete transaction');
                }
            })
            .catch(error => console.error('Error deleting transaction:', error));
    };

    const handleFilterChange = (e) => {
        setFilteredType(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const filteredTransactions = transactions.filter(transaction => {
        return !filteredType || transaction.transactionType === filteredType;
    });

    if (sortOrder === 'Ascending') {
        filteredTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else {
        filteredTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return (
        <div>
        <h3>Transaction History</h3>
        <div>
            <label htmlFor="filter">Filter by Type:</label>
            <select id="filter" value={filteredType} onChange={handleFilterChange}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <label htmlFor="sort">Sort by Date:</label>
            <select id="sort" value={sortOrder} onChange={handleSortChange}>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {filteredTransactions.map(transaction => (
                <div key={transaction.id} className="transaction-card" style={{ 
                    border: '1px solid #ccc', 
                    borderRadius: '8px', 
                    padding: '10px', 
                    margin: '10px', 
                    width: '300px'
                }}>
                    <p><strong>Category:</strong> {transaction.category}</p>
                    <p><strong>Amount:</strong> {transaction.amount}</p>
                    <p><strong>Date:</strong> {transaction.date}</p>
                    <button style={{ 
                        backgroundColor: 'red', 
                        color: '#fff', 
                        border: 'none', 
                        padding: '5px 10px', 
                        borderRadius: '5px', 
                        cursor: 'pointer' 
                    }} onClick={() => handleDelete(transaction.id)}>Delete</button>
                 
                </div>
            ))}
        </div>
    </div>
    
    );
}

export default History;
