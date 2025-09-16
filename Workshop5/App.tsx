import './App.css'
import Counter from './CounterComponent'
import UserForm from './UserForm'

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
    <div style={{ marginBottom: '40px' }}>
        <Counter initialCount={0} />
      </div>

      <div>
        <UserForm />
      </div>
    </div>
  )
}

export default App;
