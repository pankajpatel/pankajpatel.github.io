import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      margin: '2rem auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100%',
      textAlign: 'center',
    }}>
      <div>
        <h1>404: Not found</h1>
        <p>The page you were looking for could not be found.</p>
        <p>
          <Link href="/">Return Home</Link>
        </p>
      </div>
    </div>
  )
}
