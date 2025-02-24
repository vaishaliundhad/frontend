import React, { useContext } from "react";
import { TaskContext } from "./TaskProvider";
import { useNavigate } from "react-router-dom";

const ExpenseSummary = () => {
    const { task } = useContext(TaskContext);

    const navigate = useNavigate();

    const BackToHome=()=>{
        navigate("/AddExpense");
    }


    const totalAmount = task.reduce((total, expense) => total + parseFloat(expense.amount || 0), 0);

    const categoryBreakdown = task.reduce((total, expense) => {
        total[expense.category] = (total[expense.category] || 0) + parseFloat(expense.amount || 0);
        return total;
    }, {});

    return (
        <div className="p-4 bg-white shadow-md rounded mt-6 shadow-gray-600">
            <h2 className="text-2xl font-bold mb-4 text-center">Expense Summary</h2>
            <div className="mb-4">
                <h3 className="font-semibold">Total Amount :</h3>
                <p className="text-xl font-bold text-green-600">${totalAmount.toFixed(2)}</p>
            </div>
            <div>
                <h3 className="font-semibold">Breakdown by Category:</h3>
                <ul className="mt-2">
                    {Object.entries(categoryBreakdown).map(([category, amount], index) => (
                        <li key={index} className="flex justify-between border-b py-2">
                            <span className="capitalize">{category}</span>
                            <span>${amount.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <div className="text-center mt-4">

                    <button className="p-2 text-center bg-lime-600 rounded-md" onClick={BackToHome}>Back To Home</button>
                </div>
            </div>
        </div>
    );
};

export default ExpenseSummary;
