import React, { useState } from "react";

export function Table({ id, editable = false }) {
  const [rows, setRows] = useState([
    { id: 1, name: "Akshat", age: 28, city: "New York" },
    { id: 2, name: "sam", age: 34, city: "London" },
    { id: 3, name: "Vinod", age: 12, city: "Sydney" },
  ]);

  const handleRowChange = (e, rowId, column) => {
    const updatedRows = rows.map((row) =>
      row.id === rowId ? { ...row, [column]: e.target.value } : row
    );
    setRows(updatedRows);
  };

  return (
    <div className="w-full p-4 border border-gray-200 rounded-md">
      {editable ? (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Age</th>
              <th className="border p-2">City</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="border p-2">
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e) => handleRowChange(e, row.id, "name")}
                    className="w-full border p-1 rounded-md"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    value={row.age}
                    onChange={(e) => handleRowChange(e, row.id, "age")}
                    className="w-full border p-1 rounded-md"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="text"
                    value={row.city}
                    onChange={(e) => handleRowChange(e, row.id, "city")}
                    className="w-full border p-1 rounded-md"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Age</th>
              <th className="border p-2">City</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="border p-2">{row.name}</td>
                <td className="border p-2">{row.age}</td>
                <td className="border p-2">{row.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
