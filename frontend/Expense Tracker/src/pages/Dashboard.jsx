import React, { useState } from 'react';
import Analytics from '../components/Analytics';
import History from '../components/History';

function Dashboard() {
    const [tracker, setTracker] = useState(true);
    const [anlytical, setAnlytical] = useState(false);
    const [history, setHistory] = useState(false)

    const [formData, setFormData] = useState({
        transactionType: '',
        category: '',
        amount: '',
        date: ''
    });
    let url = `https://mock-final-server-api.onrender.com/${formData.transactionType}`
    console.log(url);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    function handleformSubmit(e) {
        e.preventDefault();
        fetch(url, {
            method: "POST",
            headers: { "Content-type": "Application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);

            })
            .catch((error) => {
                console.log(error);
            });

    }



    const categoryOptions = () => {
        if (formData.transactionType === 'income') {
            return (
                <>
                    <option value="">Select</option>
                    <option value="Salary">Salary</option>
                    <option value="Gifts">Gifts</option>
                    <option value="Refunds">Refunds</option>
                    <option value="Other">Other</option>
                </>
            );
        } else if (formData.transactionType === 'expense') {
            return (
                <>
                    <option value="">Select</option>
                    <option value="Food & Drinks">Food & Drinks</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Housing">Housing</option>
                    <option value="Bills">Bills</option>
                    <option value="Vehicle & Transport">Vehicle & Transport</option>
                    <option value="Lifestyle">Lifestyle</option>
                </>
            );
        } else {
            return <option value="">Select Type First</option>;
        }

    };
    function renderanalytical(){
        setAnlytical(true);
        setTracker(false)
        setHistory(false);
    }
    function renderTracker(){
        setTracker(true);
        setAnlytical(false);
        setHistory(false);

    }
    function renderHistory(){
        console.log("This is history page");
        setHistory(true);
        setAnlytical(false);
        setTracker(false);
    }

    return (
        <>
        <div>
            <button onClick={renderTracker}>Tracker</button>
            <button onClick={renderanalytical}>Analytics</button>
            <button onClick={renderHistory}>History</button>
            <div>
    {tracker &&<div> <h3>Expense Tracker</h3>
            <form onSubmit={handleformSubmit}>
                <div>
                    <label htmlFor="transactionType">Type</label>
                    <select
                        name="transactionType"
                        id="transactionType"
                        value={formData.transactionType}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select
                        name="category"
                        id="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        {categoryOptions()}
                    </select>
                </div>
                <div>
                    <label htmlFor="amount">Amount in Rupees</label>
                    <input
                        type="text"
                        name="amount"
                        id="amount"
                        value={formData.amount}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
            </div>
            
            }

            {anlytical &&  <Analytics/>}
            {history &&  <History/>}
            </div>

        </div>
        </>

    );
}

export default Dashboard;
