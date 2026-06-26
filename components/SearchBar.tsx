"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

/**
 * A controlled input that filters the transaction list as the user types
 * This component uses closures -- the event handler closes over setQuery
 */

// The parent controls what happens with the search value;
// SearchBar just calls the callback
type Props = {
    // onSearch is a callback function. Pass it a search query (text). It does something. Returns nothing.
    onSearch: (query: string) => void;
};

export function SearchBar({ onSearch }: Props) {
    const [query, setQuery] = useState('');

    // useState track the input value locally, call `onSearch` on every change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    }

    return (
        <Input 
            value={query}
            onChange={handleChange}
            placeholder="Search transactions"
        />
    )
}

/**
 * Stripe's transaction search, Linear's issue filter, Github's file finder
 * 
 * The closure is what makes the handler "remember" `setQuery` and `onSearch` without
 * those being passed as arguments every time
 * 
 * React.ChangeEvent<HTMLInputElement> = 
 * "when user types in input field, this event fires w/ the new value in e.target.value"
 */

