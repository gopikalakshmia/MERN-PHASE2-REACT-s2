import logo from './logo.svg';
import './App.css';
import Props from './components/props';
import User from './components/user';
import UserCard from './components/usercard';
import Button from './components/Button';
import Greetings from './components/greetings';
import Profile from './components/profile';
import Login from './components/login';
import Form from './components/form';
import { useState } from "react";

const user={
  name:"hari",
  email:"hari@gmail.com"
}
const handleClick=()=>{
  alert("Button clicked!!")
}

function App() {
  const [name,setName]=useState('');
  return (
    <div className="App">
       <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      {/* <Props name="Gopika"/>
      <Props name="Vishnu"/>
      <User name="gopika" email="gopika@gmail.com"/>
      <UserCard user={user}/>
      <Button onClick={handleClick} label="ClickMe"/>
      <Greetings name="deafault"/>
      <Greetings/>
      <Profile name="Athi" age={32}/>
      <Profile name={1234} age={2}/>
      <Login isLoggedIn={true} name="Gopika"/>
      <Login isLoggedIn={false}/> */}
      <Greetings name={name} />
     {/* <Form/> */}

    </div>
  );
}

export default App;
