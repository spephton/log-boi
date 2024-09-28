import monitorLogo from './assets/monitor-logo.svg'
import './App.css'

function App() {


  return (
    <>
      <div id="header">
        <div id="inner-header">
          <img src={monitorLogo} className="header-app-logo" />
          <h1>haha it's log boi</h1>
        </div>
      </div>
      <h1>View netcatted logs in real-time</h1>
      <div>

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR no u
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
