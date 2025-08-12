// src/pages/Home.jsx
import { useState } from "react";
import TicketForm from "../components/TicketForm/TicketForm";
import TicketList from "../components/TicketList/TicketList";
import TicketSearch from "../components/TicketSearch/TicketSearch";
import Modal from "../components/Modal/Modal";

import "../index.css";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="container">
            <h2>🎫 Ticketing App</h2>
            <div className="header-actions">
                <TicketSearch setSearchTerm={setSearchTerm} />
                <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
                    + Create Ticket
                </button>
            </div>
            <TicketList searchTerm={searchTerm} />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Create Ticket</h2>
                <TicketForm onClose={() => setIsModalOpen(false)} />
            </Modal>
        </div>
    );
}
