import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LoadingProvider } from './contexts/loading-context.jsx'
import { MatchesProvider } from './contexts/matches-context.jsx'
import './index.css'
import { UserProvider } from './contexts/user-context.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <LoadingProvider>
        <MatchesProvider>
          <App />
        </MatchesProvider>
      </LoadingProvider>
    </UserProvider>
  </BrowserRouter>
)
