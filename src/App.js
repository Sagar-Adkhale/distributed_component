import React from 'react';
import logo from './logo.svg';
import './App.css';
import faker from '../node_modules/faker';
import UserProfile from "./component/user.profile";
import WarnButton from "./component/warnbutton";

function App() {
  return (
    <div className="App" style={{paddingTop:"30px"}}>
   
      <div>
        <WarnButton>
       
        <UserProfile name="JOHN DOE" role="BLOG DEVELOPER" img={faker.image.avatar()} />
        </WarnButton> 
      
    
      
      </div>
      <div >
      <WarnButton>
        <UserProfile name="EMMA DOE" role="WEB DEVELOPER" img={faker.image.avatar()} />
     </WarnButton>
     </div>
      <div>
      <WarnButton>
          <UserProfile name="MAK DOE" role="MOBILE DEVELOPER" img={faker.image.avatar()} />
          </WarnButton>
     </div>
    </div>
   
  );
}

export default App;
