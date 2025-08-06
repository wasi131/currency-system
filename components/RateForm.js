export default function RateForm() {
  return (
    <div style={{ 
      maxWidth: '500px', 
      margin: '2rem auto',
      padding: '1rem',
      border: '1px solid #ddd',
      borderRadius: '8px'
    }}>
      <h2>Request Rate Change</h2>
      <form>
        <div style={{ marginBottom: '1rem' }}>
          <label>Currency:</label>
          <select style={{ width: '100%', padding: '0.5rem' }}>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Current Rate (SAR):</label>
          <input 
            type="number" 
            step="0.001"
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Requested New Rate (SAR):</label>
          <input 
            type="number" 
            step="0.001"
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <button 
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Submit Request
        </button>
      </form>
    </div>
  )
}
