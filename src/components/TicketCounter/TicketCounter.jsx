import { useTickets } from "../../context/TicketContext";

// If someone rediculously  empty the propTickets then we need to take value from context
export default function TicketCounter(propTickets) {
    const { tickets } = useTickets();
    const lists = Array.isArray(propTickets) ? propTickets : (Array.isArray(tickets)) ? tickets : []
    const openCount = lists.filter((ticket) => ticket && ticket.status !== "Closed").length;
    return (
        <div className="counter"> You have {openCount} open tickets</div>
    )
};