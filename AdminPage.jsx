// src/pages/AdminPage.jsx
import ErrorBoundary from '../components/ErrorBoundary'
import BugForm from '../components/BugForm'
import BugList from '../components/BugList'

export default function AdminPage() {
  return (
    <main style={{ maxWidth: 800, margin: '2rem auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Bug Tracker Admin</h1>
      <p>Track and manage bugs reported in the system.</p>

      <ErrorBoundary>
        <section style={{ margin: '1.5rem 0' }}>
          <BugForm />
        </section>

        <section style={{ margin: '1.5rem 0' }}>
          <h3>Existing Bugs</h3>
          <BugList />
        </section>
      </ErrorBoundary>
    </main>
  )
}
