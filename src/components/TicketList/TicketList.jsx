import DataTable from "../../common/DataTable/DataTable";
import { useTickets } from "../../context/TicketContext";

export default function TicketList({ searchTerm, onToggleStatus }) {
    const { tickets } = useTickets();

    const filtered = tickets.filter(
        (t) =>
            t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

    return <DataTable columns={columns} data={filtered} />;
}
