import React from 'react';
import Routes from './components/routes';
import { BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
       <div>
      < Routes/>
    </div>
    </BrowserRouter>
   
    
    
  );
}

export default App;
