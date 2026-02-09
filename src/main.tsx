import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ContextOpen } from './hooks/Context.tsx'
const root = document.getElementById('root')
if (!root) throw new Error('root not found')

createRoot((root)).render(
    <BrowserRouter>
        <ContextOpen>
            <App />
        </ContextOpen>
    </BrowserRouter>
)
