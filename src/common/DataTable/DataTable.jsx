import { FixedSizeList as List } from "react-window";
import React from "react";

export default function DataTable({
    columns,
    data,
    keyField = "id",
    emptyMessage = "No data found",
    page,
    pageSize,
    onPageChange
}) {
    const startIndex = (page - 1) * pageSize;
    const paginatedData = data.slice(startIndex, startIndex + pageSize);

    if (paginatedData.length === 0) {
        return <div className="table-container">{emptyMessage}</div>;
    }

    // Row component for virtualization
    const Row = ({ index, style }) => {
        const row = paginatedData[index];
        return (
            <div style={{ ...style, display: "table", width: "100%", tableLayout: "fixed" }}>
                <div style={{ display: "table-row" }}>
                    {columns.map((col) => (
                        <div
                            key={col.key}
                            style={{
                                display: "table-cell",
                                padding: "12px",
                                borderBottom: "1px solid #ddd",
                                verticalAlign: "middle",
                                ...(typeof col.style === "function"
                                    ? col.style(row[col.key], row)
                                    : col.style),
                            }}
                            onClick={
                                typeof col.onClick === "function"
                                    ? () => col.onClick(row)
                                    : undefined
                            }
                        >
                            {typeof col.render === "function"
                                ? col.render(row[col.key], row)
                                : row[col.key]}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="table-container">
            {/* Table Header */}
            <table>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key}>{col.label}</th>
                        ))}
                    </tr>
                </thead>
            </table>

            {/* Virtualized Table Body */}
            <List
                height={400}
                itemCount={paginatedData.length}
                itemSize={50} // Fixed row height
                width="100%"
            >
                {Row}
            </List>
        </div>
    );
}
