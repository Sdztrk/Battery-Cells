// src/components/BatteryTable.js
import React from 'react';

const BatteryTableInMongoDB = ({ battery }) => {


    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        marginBottom: '20px',
    };

    const thStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '8px',
        textAlign: 'left',
    };

    const tdStyle = {
        padding: '8px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
    };

    const trHover = {
        backgroundColor: '#f1f1f1',
    };




    return (
        <div>
            <h2 style={{ color: '#4CAF50' }}>Battery Details</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Voltage</th>
                        <th style={thStyle}>Max Capacity</th>
                        <th style={thStyle}>Resistance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={trHover}>
                        <td style={tdStyle}>{battery.name}</td>
                        <td style={tdStyle}>{battery.voltage}</td>
                        <td style={tdStyle}>{battery.maxCapacity}</td>
                        <td style={tdStyle}>{battery.resistance}</td>
                    </tr>
                </tbody>
            </table>

            <h2 style={{ color: '#4CAF50' }}>Energy Records from Sensor</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Total Energy</th>
                        <th style={thStyle}>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {battery.energy && battery.energy.map((record) => (
                        <tr key={record._id} style={trHover}>
                            <td style={tdStyle}>{record.totalEnergy}</td>
                            <td style={tdStyle}>{new Date(record.date).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BatteryTableInMongoDB;
