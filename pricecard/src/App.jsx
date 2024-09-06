import React from "react";
import PriceCard from "./PriceCard"; // Import the PriceCard component

// Data for the price plans
const plans = [
  {
    title: "FREE",
    price: "$0/month",
    features: [
      { name: "Single User", enabled: true },
      { name: "50GB Storage", enabled: true },
      { name: "Unlimited Public Projects", enabled: true },
      { name: "Community Access", enabled: true },
      { name: "Unlimited Private Projects", enabled: false },
      { name: "Dedicated Phone Support", enabled: false },
      { name: "Free Subdomain", enabled: false },
      { name: "Monthly Status Reports", enabled: false },
    ],
  },
  {
    title: "PLUS",
    price: "$9/month",
    features: [
      { name: "5 Users", enabled: true },
      { name: "50GB Storage", enabled: true },
      { name: "Unlimited Public Projects", enabled: true },
      { name: "Community Access", enabled: true },
      { name: "Unlimited Private Projects", enabled: true },
      { name: "Dedicated Phone Support", enabled: false },
      { name: "Free Subdomain", enabled: true },
      { name: "Monthly Status Reports", enabled: false },
    ],
  },
  {
    title: "PRO",
    price: "$49/month",
    features: [
      { name: "Unlimited Users", enabled: true },
      { name: "50GB Storage", enabled: true },
      { name: "Unlimited Public Projects", enabled: true },
      { name: "Community Access", enabled: true },
      { name: "Unlimited Private Projects", enabled: true },
      { name: "Dedicated Phone Support", enabled: true },
      { name: "Free Subdomain", enabled: true },
      { name: "Monthly Status Reports", enabled: true },
    ],
  },
];

// The main App component
const App = () => {
  return (
    <div className="price-card-container">
      {plans.map((plan, index) => (
        <PriceCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default App;
