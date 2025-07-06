import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Start from './Start'
import Quiz from './Quiz'
import Results from './Results'
import { Route , BrowserRouter , Routes } from 'react-router-dom'
import QuizProvider from './context/QuizProvider'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <QuizProvider>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/start' element={<Start/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/results' element={<Results/>}/>
      </Routes>
    </QuizProvider>
    </BrowserRouter>
  </StrictMode>,
)
