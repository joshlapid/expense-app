export default (expenses) => {
    return expenses.map(x => x.amount).reduce(function (sum, value) {
        return sum + value;
    }, 0);
};