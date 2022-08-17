
import './App.css';
import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expense";


function App() {
    const expenses = [
        {
            id: 'el1',
            title: 'test',
            amount: 24334,
            date: new Date(2021, 1, 22),
        },

        {id: 'el2', title: 'aaa', amount: 77, date: new Date(2021, 1, 22)},
        {id: 'el3', title: 'tevvvvvst', amount: 5, date: new Date(2021, 1, 22)},
    ]

    return (
        <Expense items={expenses} ></Expense>
    );
}

export default App;
