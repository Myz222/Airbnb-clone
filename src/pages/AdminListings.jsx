import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminListings = () => {
  const [listings, setListings] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    guests: '',
    bedrooms: '',
    bathrooms: '',
    price: '',
    image: '',
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/listings')
      .then((response) => setListings(response.data))
      .catch((error) => console.error('Error fetching admin listings:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddListing = () => {
    axios.post('http://localhost:5000/api/admin/listings', formData)
      .then((response) => {
        setListings([...listings, response.data]);
        setFormData({ title: '', type: '', guests: '', bedrooms: '', bathrooms: '', price: '', image: '' });
      })
      .catch((error) => console.error('Error adding listing:', error));
  };

  const handleDeleteListing = (id) => {
    axios.delete(`http://localhost:5000/api/admin/listings/${id}`)
      .then(() => setListings(listings.filter((listing) => listing._id !== id)))
      .catch((error) => console.error('Error deleting listing:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Listings Management</h1>
      <div className="mb-4">
        <h2 className="text-xl mb-2">Add New Listing</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            value={formData.type}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="guests"
            placeholder="Guests"
            value={formData.guests}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="bedrooms"
            placeholder="Bedrooms"
            value={formData.bedrooms}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="bathrooms"
            placeholder="Bathrooms"
            value={formData.bathrooms}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Image Name"
            value={formData.image}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
        </form>
        <button
          onClick={handleAddListing}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Listing
        </button>
      </div>
      <div>
        <h2 className="text-xl mb-2">All Listings</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Type</th>
              <th className="border border-gray-300 px-4 py-2">Guests</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing._id}>
                <td className="border border-gray-300 px-4 py-2">{listing.title}</td>
                <td className="border border-gray-300 px-4 py-2">{listing.type}</td>
                <td className="border border-gray-300 px-4 py-2">{listing.guests}</td>
                <td className="border border-gray-300 px-4 py-2">${listing.price}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDeleteListing(listing._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminListings;
