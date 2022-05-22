import React from 'react';
import MenuBar from '../../components/MenuBar/MenuBar'
import Container from '../../components/Container/Container'
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
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
          <Container/>
          <div style={{  
            display: "grid",  
            gridTemplateColumns: "1fr 3fr" ,    
          }}> 
          </div>
          </div>
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