import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Donation.css'; 

export default function DonationInitiative() {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/Users')
            .then(res => { setDonations(res.data); })
            .catch(err => { console.log(err); });
    }, []);

    return (
        <div>
            <div className="flex-container">
                {donations.map(donation => (
                    <div className="flex-items" key={donation.id}>
                        <h1>{donation.donorName}</h1><br></br>
                        <p><strong>Donation Amount:</strong> {donation.amount}</p><br></br>
                        <p><strong>Donation Date:</strong> {donation.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

