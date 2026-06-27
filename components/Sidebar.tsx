import Link from "next/link";

export function Sidebar() {
  return (
    <nav className="flex flex-col gap-1 p-4 w-48 border-r border-border min-h-screen">
      <Link href="/" className="px-3 py-2 rounded-md text-sm hover:bg-accent">Dashboard</Link>
      <Link href="/transactions" className="px-3 py-2 rounded-md text-sm hover:bg-accent">Transactions</Link>
      <Link href="/settings" className="px-3 py-2 rounded-md text-sm hover:bg-accent">Settings</Link>
    </nav>
  );
}
