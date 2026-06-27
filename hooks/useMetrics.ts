type Transaction = {
  id: string;
  amount: number;
  type: "credit" | "debit";
  description: string;
  date: string;
};

class TransactionSummary {
  constructor(private transactions: Transaction[]) {}

  getMetrics() {
    const valid          = this.transactions.filter(tx => tx.amount > 0);
    const totalIncome    = valid.filter(tx => tx.type === "credit").reduce((acc, tx) => acc + tx.amount, 0);
    const totalExpenses  = valid.filter(tx => tx.type === "debit").reduce((acc, tx) => acc + tx.amount, 0);
    const netBalance     = totalIncome - totalExpenses;
    const transactionCount = valid.length;

    return { totalIncome, totalExpenses, netBalance, transactionCount };
  }
}

export function useMetrics(transactions: Transaction[]) {
  const summary = new TransactionSummary(transactions);
  return summary.getMetrics();
}