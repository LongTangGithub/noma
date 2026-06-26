import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Transaction = {
    id: string;
    description: string;
    amount: number;
    type: "debit" | "credit";
    date: string;
};

type Props = {
    transactions: Transaction[];
};

export function TransactionList({ transactions }: Props) {
    const zeroAmountTransactions = transactions.filter(
        transaction => transaction.amount > 0
    );

    const total = zeroAmountTransactions.reduce((acc, transaction) =>
        transaction.type === 'credit' ? acc + transaction.amount : acc - transaction.amount, 0
    );

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    Transactions
                </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-0">
                <ul>
                    {zeroAmountTransactions.map(transaction => (
                        <li key={transaction.id} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                            <div className="flex items-center gap-2 min-w-0">
                                <span className="text-sm truncate">{transaction.description}</span>
                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                                    transaction.type === 'credit'
                                        ? 'bg-green-500/10 text-green-500'
                                        : 'bg-red-500/10 text-red-500'
                                }`}>
                                    {transaction.type}
                                </span>
                            </div>
                            <span className={`text-sm font-mono shrink-0 w-24 text-right ${transaction.type === 'credit' ? 'text-green-500' : 'text-red-500'}`}>
                                {transaction.type === 'debit' ? '-' : '+'}${transaction.amount.toFixed(2)}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between items-center pt-4 mt-2 border-t border-border font-semibold text-sm">
                    <span>Total</span>
                    <span className={`font-mono ${total >= 0 ? "text-green-500" : "text-red-500"}`}>
                        {total >= 0 ? "+" : ""}${Math.abs(total).toFixed(2)}
                    </span>
                </div>
            </CardContent>
        </Card>
    )
}
