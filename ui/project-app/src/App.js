import {Routes,Route} from 'react-router-dom';

import Header from './components/Header'
import Home from './components/Home'
import Books from './components/Books'
import CreatePoem from './components/CreatePoem'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="app-card">
      <Header />
      <div className="app-body">
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/books" element={<Books/>} />
            <Route path="/submit" element={<CreatePoem/>}/>
          </Routes>
        
      </div>
    </div>
  </div>
)

export default App