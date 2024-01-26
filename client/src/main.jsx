import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LoadingProvider } from './contexts/loading-context.jsx'
import { MatchesProvider } from './contexts/matches-context.jsx'
import { UserProvider } from './contexts/user-context.jsx'
import { PlayersProvider } from './contexts/players-context.jsx'
import { UserFilteredProvider } from './contexts/user-filtered-context.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <UserFilteredProvider>
        <LoadingProvider>
          <PlayersProvider>
            <MatchesProvider>
              <App />
            </MatchesProvider>
          </PlayersProvider>
        </LoadingProvider>
      </UserFilteredProvider>
    </UserProvider>
  </BrowserRouter>
)
