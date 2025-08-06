import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ 
      padding: '1rem',
      background: '#2563eb',
      color: 'white',
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h3 style={{ margin: 0 }}>Currency System</h3>
      <Link href="/request-rate" style={{ color: 'white' }}>
        Request Rate Change
      </Link>
    </nav>
  )
}
