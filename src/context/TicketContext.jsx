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

    const addTicket = (ticket) => {
        const newTicket = {
            id: Date.now(),
            ...ticket,
            status: 'open',
            createdAt: new Date().toISOString()
        }
        setTickets(prev => [newTicket, ...prev])
    };

    return (
        <TicketContext.Provider value={{ tickets, setTickets, addTicket }}>
            {children}
        </TicketContext.Provider>
    );
};

export const useTickets = () => useContext(TicketContext);