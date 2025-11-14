import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Router from './routes/Router'
import { AuthProvider } from './providers/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App