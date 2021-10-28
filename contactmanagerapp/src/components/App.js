import React from "react";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from "./ContactList";
function App() {
  const contacts =[
    {
      id:"1",
      name:"Atul Kumar",
      email:"atulkumar987613@gmail.com"
    },
  ]
  return (
    <div>
     
         <Header /><br/><br/><br/>
         <AddContact />
         <ContactList />
    </div>
  );
}

export default App;
