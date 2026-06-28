export type TransactionType = "credit" | "debit";

export type Transaction = {
  id: string;
  description: string;
  amount: number;
  type: TransactionType;
  date: string;
};
