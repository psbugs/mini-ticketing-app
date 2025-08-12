// src/context/TicketContext.jsx
import { createContext, useState, useContext, useEffect } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
    const [tickets, setTickets] = useState(() => {
        const saved = localStorage.getItem("tickets");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("tickets", JSON.stringify(tickets));
    }, [tickets]);

    const addTicket = (ticket) => setTickets([...tickets, { id: Date.now(), ...ticket }]);

    return (
        <TicketContext.Provider value={{ tickets, addTicket }}>
            {children}
        </TicketContext.Provider>
    );
};

export const useTickets = () => useContext(TicketContext);
