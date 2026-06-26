import { TransactionList } from "@/components/TransactionList";
import { useMetrics } from "@/hooks/useMetrics";

const MOCK_TRANSACTIONS = [
  { id: "1", description: "Stripe payout",   amount: 1250.00, type: "credit" as const, date: "2026-06-25" },
  { id: "2", description: "AWS bill",         amount: 89.40,  type: "debit"  as const, date: "2026-06-24" },
  { id: "3", description: "Figma subscription", amount: 15.00, type: "debit" as const, date: "2026-06-23" },
  { id: "4", description: "Customer refund",  amount: 0,      type: "debit"  as const, date: "2026-06-22" },
];

export default function Home() {
  const { totalIncome, totalExpenses, netBalance, transactionCount } = useMetrics(MOCK_TRANSACTIONS);

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-sm flex flex-col gap-4">
        <TransactionList transactions={MOCK_TRANSACTIONS} />

        <div className="text-sm text-muted-foreground space-y-1">
          <p>Income: ${totalIncome?.toFixed(2)}</p>
          <p>Expenses: ${totalExpenses?.toFixed(2)}</p>
          <p>Net balance: ${netBalance?.toFixed(2)}</p>
          <p>Transactions: {transactionCount}</p>
        </div>
      </div>
    </main>
  );
}
