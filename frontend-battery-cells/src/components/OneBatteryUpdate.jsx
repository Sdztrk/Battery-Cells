import React, { useState } from 'react';
import axios from 'axios';

const OneBatteryUpdate = () => {
    const [formData, setFormData] = useState({
        batteryId: '',
        name: '',
        voltage: '',
        maxCapacity: '',
        resistance: '',
        totalEnergy: [] // Changed to an array
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        const batteryData = {
            name: formData.name,
            voltage: parseFloat(formData.voltage),
            maxCapacity: parseFloat(formData.maxCapacity),
            resistance: parseFloat(formData.resistance),
            energy: [
                {
                    totalEnergy: parseFloat(formData.totalEnergy) // Convert totalEnergy to float
                }
            ]
        };

        try {
            await axios.put(`http://localhost:5000/api/battery/66549720d9e36732a4f7d428`, batteryData);
            alert('Battery updated successfully!');
            
            // Optionally, reset form
            setFormData({
                batteryId: '',
                name: '',
                voltage: '',
                maxCapacity: '',
                resistance: '',
                totalEnergy: []
            });
        } catch (error) {
            console.error('Error updating battery:', error);
            alert('Failed to update battery. Please try again.');
        }
    };

    return (
        <form className="battery-form" onSubmit={handleUpdate}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="voltage">Voltage:</label>
                <input
                    type="number"
                    step="0.01"
                    id="voltage"
                    name="voltage"
                    value={formData.voltage}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="maxCapacity">Max Capacity (mAh):</label>
                <input
                    type="number"
                    id="maxCapacity"
                    name="maxCapacity"
                    value={formData.maxCapacity}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="resistance">Resistance (Ω):</label>
                <input
                    type="number"
                    step="0.01"
                    id="resistance"
                    name="resistance"
                    value={formData.resistance}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="totalEnergy">Total Energy (Wh):</label>
                <input
                    type="number"
                    step="0.01"
                    id="totalEnergy"
                    name="totalEnergy"
                    value={formData.totalEnergy[0]} // Assuming only updating the first entry
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="submit-button">Update Battery</button>
        </form>
    );
};

export default OneBatteryUpdate;
