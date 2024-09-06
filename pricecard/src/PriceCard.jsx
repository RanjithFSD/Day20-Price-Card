import React from "react";
import "./index.css"; // Import CSS for styling

const PriceCard = ({ plan }) => {
  return (
    <div className="price-card">
      <h3>{plan.title}</h3>
      <h1>{plan.price}</h1>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index} className={feature.enabled ? "enabled" : "disabled"}>
            {feature.name}
          </li>
        ))}
      </ul>
      <button className="btn">BUTTON</button>
    </div>
  );
};

export default PriceCard;
