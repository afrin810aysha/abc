import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';
export default function DonationInitiative() {
    const [donations, setDonations] = useState([]);
    const [donorName, setDonorName] = useState('');
    const [donationAmount, setDonationAmount] = useState('');
    const [donationDate, setDonationDate] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/Users')
            .then(res => { setDonations(res.data); })
            .catch(err => { console.log(err); });
    }, []);

    const handleAddDonation = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:3001/Users', {
            donorName: donorName,
            amount: donationAmount,
            date: donationDate
        })
        .then(res => { 
            console.log(res); 
            axios.get('http://localhost:3001/Users')
                .then(res => { setDonations(res.data); })
                .catch(err => { console.log(err); });
        })
        .catch(err => { console.log(err); });
    };

    const handleDeleteDonation = (donationId) => {
        axios.delete(`http://localhost:3001/Users/${donationId}`)
            .then(res => { console.log(res); })
            .catch(err => { console.log(err); });
    };

    return (
        <div className="container">
          
            <h1>Donation Initiative System</h1>

            <form onSubmit={handleAddDonation}>
                <label>Donor Name:</label>
                <input type="text" value={donorName} onChange={(e) => setDonorName(e.target.value)} />
                <br />

                <label>Donation Amount:</label>
                <input type="text" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} />
                <br />

                <label>Donation Date:</label>
                <input type="text" value={donationDate} onChange={(e) => setDonationDate(e.target.value)} />
                <br />

                <button type="submit">Add Donation</button>
            </form>

            <br />

            <table>
                <thead>
                    <tr>
                        <th>Donor Name</th>
                        <th>Donation Amount</th>
                        <th>Donation Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {donations.map(donation => (
                        <tr key={donation.id}>
                            <td>{donation.donorName}</td>
                            <td>{donation.amount}</td>
                            <td>{donation.date}</td>
                            <td>
                                <button onClick={() => handleDeleteDonation(donation.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
