# 🎫 Mini Ticket Management App

A simple **React-based mini ticket tracking system** with context API for  state management, reusable table components, and a clean modular architecture.  
This app allows you to create, search, and manage tickets with priority & status controls.

---

## 🚀 Features

- **Create and Manage Tickets**
- **Search Filter** by title or description
- **Status Toggle** (Open / Closed) by clicking on the status cell
- **Priority-based Styling** (High = Red, Medium = Orange, Low = Green)
- **Reusable DataTable Component** for displaying tabular data across modules
- **Context API** for centralized ticket state management

---

## 🛠️ Tech Stack

- **React 19+**
- **Context API** for state
- **JavaScript (ES6+)**
- **Vite** for fast development
- **CSS Modules / Plain CSS** for styling

---

## 📂 Project Structure

```

src/
├── assets/
│ └── common/
│ └── DataTable.jsx # Reusable table component
│
├── components/
│ ├── Modal/
│ │ └── Modal.jsx # Modal component
│ │
│ ├── TicketCounter/
│ │ └── TicketCounter.jsx # Ticket statistics
│ │
│ ├── TicketForm/
│ │ └── TicketForm.jsx # Form to create/edit tickets
│ │
│ ├── TicketList/
│ │ └── TicketList.jsx # Ticket listing with reusable DataTable
│ │
│ └── TicketSearch/
│ └── TicketSearch.jsx # Ticket search bar
│
├── context/
│ └── TicketContext.jsx # Global ticket state using Context API
│
├── pages/
│ └── Home.jsx # Main landing page
│
├── App.jsx # Root component
├── App.css # Global styles
├── index.css # Base styles
└── main.jsx # App entry point

````

---

## 🔧 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/psbugs/mini-ticketing-app.git

# Navigate into the project
cd mini-ticketing-app

# Install dependencies
npm install

# Start development server
npm run dev
````

---

## 📜 Usage

1. **Add Tickets** – Use the ticket form to create a new ticket.
2. **Search** – Enter a keyword in the search bar to filter tickets.
3. **Toggle Status** – Click the **Status** cell to toggle between `Open` and `Closed`.
4. **Priority Colors**:

   * 🔴 **High** – Red
   * 🟠 **Medium** – Orange
   * 🟢 **Low** – Green

---

## ♻ Reusable DataTable

The `DataTable` component is fully reusable across modules.

**Example usage in `TicketList.jsx`:**

```jsx
<DataTable
  columns={[
    { key: "title", label: "Title" },
    { key: "description", label: "Description" },
    {
      key: "priority",
      label: "Priority",
      style: (value) => ({
        color: value === "high" ? "red" : value === "medium" ? "orange" : "green",
        fontWeight: "bold"
      }),
    },
    {
      key: "status",
      label: "Status",
      style: (value) => ({
        cursor: "pointer",
        color: value === "Open" ? "green" : "gray",
        fontWeight: "bold"
      }),
      onClick: (row) => onToggleStatus(row.id),
    },
  ]}
  data={filteredTickets}
/>
```

---

## 🖼 Screenshot

![alt text](image.png)
---

## 📄 License

This project is licensed under the **MIT License** – free to use and modify.

---

## 👨‍💻 Author

* **Praveen Sunhare** – [GitHub](https://github.com/psbugs)