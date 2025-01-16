import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './reduce/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './reduce/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersistGate loading={null} persistor={persistor}></PersistGate>
    <Provider store={store}>
      <App />
      </Provider>
  </StrictMode>,
)
