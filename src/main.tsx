import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import setupStore from './store/store.ts'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ThemeProvider } from './theme/ThemeContext.tsx'

const store = setupStore()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DndProvider backend={HTML5Backend} >
    <Provider store={store}>
    <ThemeProvider >
    <App />
    </ThemeProvider >
    </Provider>
    </DndProvider>
  </StrictMode>,
)
