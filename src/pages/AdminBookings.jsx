import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../api/api';
const AdminBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        api.get('http://localhost:5000/api/admin/bookings')
            .then((response) => {
                console.log('Fetched Bookings:', response.data); 
                setBookings(response.data);
            })
            .catch((error) => console.error('Error fetching bookings:', error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Bookings Management</h1>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">User</th>
                        <th className="border border-gray-300 px-4 py-2">Property</th>
                        <th className="border border-gray-300 px-4 py-2">Check-In</th>
                        <th className="border border-gray-300 px-4 py-2">Check-Out</th>
                        <th className="border border-gray-300 px-4 py-2">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking._id}>
                            <td className="border border-gray-300 px-4 py-2">
                                {booking.user || 'GUEST_USER'}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {booking.property?.title || 'N/A'}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {booking.startDate ? new Date(booking.startDate).toLocaleDateString() : 'N/A'}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {booking.endDate ? new Date(booking.endDate).toLocaleDateString() : 'N/A'}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {booking.totalPrice ? `$${booking.totalPrice}` : 'N/A'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default AdminBookings;
