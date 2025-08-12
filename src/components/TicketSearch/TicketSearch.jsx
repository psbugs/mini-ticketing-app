// src/components/TicketSearch/TicketSearch.jsx
import "../../index.css";

export default function TicketSearch({ setSearchTerm }) {
    return (
        <input
            className="search-bar"
            type="text"
            placeholder="Search tickets..."
            onChange={(e) => setSearchTerm(e.target.value)}
        />

    );
}
