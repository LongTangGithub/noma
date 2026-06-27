type Transaction = {
  id: string;
  description: string;
  amount: number;
  type: "credit" | "debit";
  date: string;
};

/**
 * A typed fetcher wrapper that centralises HTTP concerns
 * 
 * @param url 
 * @returns 
 */

export async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch( url );
  if( !res.ok ) throw new Error(`HTTP error: ${res.status}`)
  return res.json() as Promise<T>;
}

export const getTransactions = () => fetcher<Transaction[]>('/api/transactions');