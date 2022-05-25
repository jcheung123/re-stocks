import React, {useState} from 'react';
import MenuBar from '../../components/MenuBar/MenuBar'
import Container from '../../components/Container/Container'
import Portfolio from '../Portfolio/Portfolio';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  const [watchlist, setWatchlist] = useState([]);

  return (
    <Router>
      <div style={{  
        display: "grid",  
        gridTemplateColumns: "1fr 3fr" ,
      }}> 
        <MenuBar/>
        <Switch>
          <Route exact path='/' render={()=> 
            <div>
          <Container setWatchlist={setWatchlist} watchlist={watchlist}/>
          <div style={{  
            display: "grid",  
            gridTemplateColumns: "1fr 3fr" ,    
          }}> 
          </div>
          </div>
        } 
         /> 
          <Route exact path='/portfolio' render={()=> 
            <Portfolio setWatchlist={setWatchlist} watchlist={watchlist}/>
          }
          />
          <Route exact path='/login' render={()=> 
            <LoginPage />
          }
          />
          <Route exact path='/signup' render={()=> 
            <SignUpPage />
          }
          />
          <Route render={() => (
              <h3> Error: This Route Does Not Exist </h3>
          )}/>
        </Switch>
      </div>

      <div style={{  
        display: "grid",  
        gridTemplateColumns: "1fr 3fr" ,    
      }}> 
      </div>
    
    </Router>
  );
}

export default App;