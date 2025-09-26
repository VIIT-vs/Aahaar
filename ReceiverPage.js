// import React, { useEffect, useState } from "react";
// import { getDonations } from "../api";

// function ReceiverPage() {
//   const [donations, setDonations] = useState([]);

//   useEffect(() => {
//     const fetchDonations = async () => {
//       const data = await getDonations();
//       setDonations(data);
//     };
//     fetchDonations();
//   }, []);

//   const handleRequest = async (id) => {
//     const res = await fetch("http://localhost:5000/api/requests", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ receiverName: "Receiver1", foodId: id }),
//     });
//     const result = await res.json();
//     alert(result.message || "Request sent!");
//   };

//   return (
//     <div>
//       <h2>Available Donations</h2>
//       {donations.map((donation) => (
//         <div key={donation._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
//           <h3>{donation.donorName}</h3>
//           <p>Menu: {donation.menu.join(", ")}</p>
//           <p>Quantity: {donation.quantity}</p>
//           <p>Pickup: {donation.location}</p>
//           <button onClick={() => handleRequest(donation._id)}>Request Food</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ReceiverPage;

import React, { useEffect, useState } from "react";
import { getDonations } from "../api";

function ReceiverPage() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      const data = await getDonations();
      setDonations(data);
    };
    fetchDonations();
  }, []);

  const handleRequest = async (id) => {
    const res = await fetch("http://localhost:5000/api/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ receiverName: "Receiver1", foodId: id }),
    });
    const result = await res.json();
    alert(result.message || "Request sent!");
  };

  return (
    <div>
      <h2>Available Donations</h2>
      {donations.map((donation) => (
        <div key={donation._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{donation.donorName}</h3>
          <p>Menu: {donation.menu.join(", ")}</p>
          <p>Quantity: {donation.quantity}</p>
          <p>Pickup: {donation.location}</p>
          <button onClick={() => handleRequest(donation._id)}>Request Food</button>
        </div>
      ))}
    </div>
  );
}

export default ReceiverPage;
