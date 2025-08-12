import { useState } from "react";
import TicketForm from "../components/TicketForm/TicketForm";
import TicketList from "../components/TicketList/TicketList";
import TicketSearch from "../components/TicketSearch/TicketSearch";
import Modal from "../components/Modal/Modal";
import TicketCounter from "../components/TicketCounter/TicketCounter";
import { useTickets } from "../context/TicketContext"; // ADD THIS

import "../index.css";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { tickets, setTickets } = useTickets();

    const handleToggleStatus = (id) => {
        setTickets((prev) =>
            prev.map((ticket) =>
                ticket.id === id
                    ? {
                        ...ticket,
                        status: ticket.status === "Open" ? "Closed" : "Open",
                    }
                    : ticket
            )
        );
    };

    return (
        <div className="container">
            <h2>🎫 Ticketing App</h2>
            {/* Search + Create Ticket container */}
            <div className="header-actions">
                <TicketSearch setSearchTerm={setSearchTerm} />
                <button
                    className="btn-primary"
                    onClick={() => setIsModalOpen(true)}
                >
                    + Create Ticket
                </button>
            </div>
            {/* Separate ticket counter reuable component */}
            <TicketCounter />
            {/* For Listing Tickets which internally again uses reusable datatable components to show data */}
            <TicketList
                searchTerm={searchTerm}
                onToggleStatus={handleToggleStatus}
            />

            {/* A modal will appear as soon as user click on create ticket button in the form of a modal popup*/}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Create Ticket</h2>
                <TicketForm onClose={() => setIsModalOpen(false)} />
            </Modal>
        </div>
    );
}
