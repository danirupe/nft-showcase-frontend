import Router from './router/Router'
import AuthState from './utility/context/auth/AuthState'

function App() {
  return (
    <AuthState>
      <Router />
    </AuthState>
  )
}

export default App
