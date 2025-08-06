export default function Home() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#4CAF50' }}>Currency System is Live! 🎉</h1>
      <p>Next step: We'll build the login system</p>
      <div style={{ marginTop: '30px' }}>
        <p>Deployment successful at: {new Date().toLocaleString()}</p>
      </div>
    </div>
  )
}
