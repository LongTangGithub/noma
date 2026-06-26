type Transaction = {
  id: string;
  amount: number;
  type: "credit" | "debit";
  description: string;
  date: string;
};

const sumByType = (transactions: Transaction[], type: "credit" | "debit") => {
  return transactions
    .filter((transaction) => transaction.type === type)
    .reduce((acc, transaction) => acc + transaction.amount, 0);
};

export function useMetrics(transactions: Transaction[]) {
    const totalIncome = sumByType(transactions, "credit");
    const totalExpenses = sumByType(transactions, "debit");
    const netBalance = totalIncome - totalExpenses;
    const transactionCount = transactions.filter(tx => tx.amount > 0).length;

    return { totalIncome, totalExpenses, netBalance, transactionCount };
}