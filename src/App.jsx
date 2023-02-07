// JSX = Javascript + XML

import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header/>
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <strong>teste</strong>
      </main>
    </div>
    </div>
  )
}

export default App


// Default Exports vs Named Exports
// Default tu pode nomear o import;
// Named Exports 