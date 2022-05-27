import React, {useState} from 'react';
import MenuBar from '../../components/MenuBar/MenuBar'
import Container from '../../components/Container/Container'
import Portfolio from '../Portfolio/Portfolio';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import userService from '../../utils/userService';


function App() {

  const [user, setUser] = useState(userService.getUser())
  const [watchlist, setWatchlist] = useState([]);

  const handleLogout = () => {
    userService.logout();
    setUser(null)
  }

  const handleSignupOrLogin = () => {
    setUser(userService.getUser())
  }

  return (
    <Router>
      <div style={{  
        display: "grid",  
        gridTemplateColumns: "1fr 3fr" ,
      }}> 
        <MenuBar user={user} handleLogout={handleLogout}/>
        <Switch>
          <Route exact path='/' render={()=> 
            <div>
          <Container setWatchlist={setWatchlist} watchlist={watchlist} user={user} setUser={setUser}/>
          <div style={{  
            display: "grid",  
            gridTemplateColumns: "1fr 3fr" ,    
          }}> 
          </div>
          </div>
        } 
         /> 
          <Route exact path='/portfolio' render={(props)=> 
            <Portfolio setWatchlist={setWatchlist} watchlist={watchlist} user={user} setUser={setUser} history={props.history}/>
          }
          />
          <Route exact path='/login' render={()=> 
            <LoginPage handleLogin={handleSignupOrLogin}/>
          }
          />
          <Route exact path='/signup' render={(props)=> 
            <SignUpPage handleSignup={handleSignupOrLogin} history={props.history}/>
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