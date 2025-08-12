import { useState, useMemo } from "react";
import DataTable from "../../common/DataTable/DataTable";
import { useTickets } from "../../context/TicketContext";

export default function TicketList({ searchTerm, onToggleStatus }) {
    const { tickets } = useTickets();
    const [page, setPage] = useState(1);
    const pageSize = 50;

    // Debounced search term
    const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);
    useMemo(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchTerm);
            setPage(1); // Reset to first page when search changes
        }, 300);
        return () => clearTimeout(handler);
    }, [searchTerm]);

    // Memoized filtering
    const filtered = useMemo(() => {
        return tickets.filter(
            (t) =>
                t.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                t.description.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
    }, [tickets, debouncedSearch]);

    const columns = [
        { key: "title", label: "Title" },
        { key: "description", label: "Description" },
        {
            key: "priority",
            label: "Priority",
            style: (value) => ({
                color: value === "high" ? "red" : value === "medium" ? "orange" : "green",
                fontWeight: "bold",
            }),
        },
        {
            key: "status",
            label: "Status",
            style: (value) => ({
                cursor: "pointer",
                color: value === "Open" ? "green" : "gray",
                fontWeight: "bold",
            }),
            onClick: (row) => onToggleStatus(row.id),
        },
    ];

    return (
        <DataTable
            columns={columns}
            data={filtered}
            page={page}
            pageSize={pageSize}
            onPageChange={setPage}
        />
    );
}
