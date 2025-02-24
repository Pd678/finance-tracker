// import MyChart from "./MyChart";
// import "./Dashboard.css"; // Import styles

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <h1 className="dashboard-title">📊 Finance Dashboard</h1>
//       <p className="dashboard-subtext">Track your expenses easily!</p>
//       <div className="dashboard-content">
//         <MyChart />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import MyChart from "./MyChart";
import "./Dashboard.css"; // Import styles

const Dashboard = () => {
  // Mock data for demonstration (Replace with actual API data)
  const totalExpenses = 450; // Example total expense
  const budget = 1000; // Example monthly budget
  const expenses = [
    { category: "Food", amount: 120, color: "#FF6384" },
    { category: "Transport", amount: 80, color: "#36A2EB" },
    { category: "Entertainment", amount: 100, color: "#FFCE56" },
    { category: "Rent", amount: 150, color: "#4BC0C0" },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">📊 Expense Tracker Dashboard</h1>
      <p className="dashboard-subtext">Manage and analyze your spending efficiently!</p>

      {/* Total Expense Section */}
      <div className="expense-summary">
        <h2>Total Expenses: <span className="expense-amount">${totalExpenses}</span></h2>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${(totalExpenses / budget) * 100}%`, backgroundColor: totalExpenses > budget ? "red" : "green" }}
          ></div>
        </div>
        <p>Budget: ${budget} | Remaining: ${budget - totalExpenses}</p>
      </div>

      {/* Expense Breakdown Table */}
      <div className="expense-table">
        <h3>Expense Breakdown</h3>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index} style={{ color: expense.color }}>
                <td>{expense.category}</td>
                <td>${expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Expense Chart */}
      <div className="dashboard-content">
        <MyChart />
      </div>
    </div>
  );
};

export default Dashboard;
