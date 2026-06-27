type Transaction = {
  id: string;
  description: string;
  amount: number;
  type: "credit" | "debit";
  date: string;
};

export async function fetcher<T>(url: string): Promise<T> {
  /* ??? */
}

export const getTransactions = () => /* ??? */;
