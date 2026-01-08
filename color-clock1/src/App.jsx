import { format } from 'date-fns'
import './App.css'

function App() {
  return (
    <div className="time-container">
      <p className="time-text">
        {format(new Date(), 'PPpp')}
      </p>
    </div>
  )
}

export default App