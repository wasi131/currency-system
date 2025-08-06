import { useState } from 'react';
import { submitRateRequest } from '../lib/sheets';

export default function RateForm() {
  const [formData, setFormData] = useState({
    currency: 'USD',
    currentRate: 3.75,
    requestedRate: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitRateRequest(formData);
      alert('Request submitted successfully!');
      setFormData({...formData, requestedRate: ''});
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <h2>Request Rate Change</h2>
      <form onSubmit={handleSubmit}>
        {/* Currency Selection */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Currency:</label>
          <select
            value={formData.currency}
            onChange={(e) => setFormData({...formData, currency: e.target.value})}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
          </select>
        </div>

        {/* Requested Rate Input */}
        <div style={{ marginBottom: '1rem' }}>
          <label>New Rate (SAR):</label>
          <input
            type="number"
            step="0.001"
            value={formData.requestedRate}
            onChange={(e) => setFormData({...formData, requestedRate: e.target.value})}
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>

        <button 
          type="submit"
          style={{
            padding: '0.75rem 1.5rem',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
