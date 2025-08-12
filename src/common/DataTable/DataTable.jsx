export default function DataTable({ columns, data, keyField = "id", emptyMessage = "No data found" }) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col.key}>{col.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (
                    data.map((row) => (
                        <tr key={row[keyField]}>
                            {columns.map((col) => (
                                <td
                                    key={col.key}
                                    style={typeof col.style === "function" ? col.style(row[col.key], row) : col.style}
                                    onClick={
                                        typeof col.onClick === "function"
                                            ? () => col.onClick(row)
                                            : undefined
                                    }
                                >
                                    {typeof col.render === "function" ? col.render(row[col.key], row) : row[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={columns.length}>{emptyMessage}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
