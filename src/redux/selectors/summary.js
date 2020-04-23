export default (expenses = []) => {
    let total = 0;
    const length = expenses.length;
    expenses.forEach(expense => {
        total = total + expense.amount;
    });
    return {
        total,
        length
    };
};