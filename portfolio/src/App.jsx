import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/main'
import Work from './components/Work'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Sidenav />
        <Main />
        <Work />
        <Projects />
      </div>
  )
}

export default App
