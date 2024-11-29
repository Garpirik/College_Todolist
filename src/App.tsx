
import { useContext } from 'react'
import s from './App.module.css'
import TodoContainer from './components/Todo/TodoContainer/TodoContainer'
import Header from './layout/Header'
import ThemeContext, { useTheme } from './theme/ThemeContext'



function App() {

  const{isDark } = useTheme()
  return (
    <div className={isDark ? s.darkTheme: s.lightTheme }>
    <Header />
    <TodoContainer />
    </div>
  )
}

export default App
