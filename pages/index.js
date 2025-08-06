import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '0 2rem' }}>
        <h1>Foreign Currency Rates</h1>
        <p>Current POS Rates: 1 USD = 3.75 SAR</p>
      </div>
    </div>
  )
}
