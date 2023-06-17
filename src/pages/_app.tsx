import { Outlet } from 'react-router-dom'
import { Modals } from '@generouted/react-router'

export default function App() {

  return (
    <section style={{ margin: 24 }}>
      <header style={{ display: 'flex', gap: 24 }}>
        <div>ini navbar</div>
      </header>

      <main>
        <Outlet />
      </main>

      <Modals />
    </section>
  )
}
