// src/components/TicketList.jsx
import { useTickets } from "../../context/TicketContext";

export default function TicketList({ searchTerm, onToggleStatus }) {
    const { tickets } = useTickets();
    const filtered = tickets.filter(
        (t) =>
            t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {filtered.length > 0 ? (
                    filtered.map((ticket) => (
                        <tr key={ticket.id}>
                            <td>{ticket.title}</td>
                            <td>{ticket.description}</td>
                            <td
                                style={{
                                    color:
                                        ticket.priority === "high"
                                            ? "red"
                                            : ticket.priority === "medium"
                                                ? "orange"
                                                : "green",
                                    fontWeight: "bold",
                                }}
                            >
                                {ticket.priority}
                            </td>
                            <td
                                style={{
                                    cursor: "pointer",
                                    color: ticket.status === "Open" ? "green" : "gray",
                                    fontWeight: "bold",
                                }}
                                onClick={() => onToggleStatus(ticket.id)}
                            >
                                {ticket.status}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No tickets found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
