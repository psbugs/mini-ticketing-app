// src/App.jsx
import { TicketProvider } from "./context/TicketContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <TicketProvider>
      <Home />
    </TicketProvider>
  );
}
