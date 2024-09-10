import React from 'react';
import './App.css';

function App() {
  const pricingPlans = [
    {
      title: 'FREE',
      price: '$0/month',
      features: [
        'Single User',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'No Unlimited Private Projects',
        'No Dedicated Phone Support',
        'No Free Subdomain',
        'No Monthly Status Reports',
      ],
    },
    {
      title: 'PLUS',
      price: '$9/month',
      features: [
        '5 Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'No Monthly Status Reports',
      ],
    },
    {
      title: 'PRO',
      price: '$49/month',
      features: [
        'Unlimited Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
    },
  ];

  return (
    <div className="App">
      <div className="pricing-container">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h2>{plan.title}</h2>
            <p className="price">{plan.price}</p>
            <ol>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ol>
            <button>Subscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
