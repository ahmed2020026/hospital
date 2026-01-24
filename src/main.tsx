import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
const root = document.getElementById('root')
if (!root) throw new Error('root not found')

createRoot((root)).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)