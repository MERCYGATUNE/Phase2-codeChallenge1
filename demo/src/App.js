import {useState} from 'react';
import List from  './Components/List';
import './App.css';
import React from 'react'


function App() {
 
  const initialData = [
    {
      "id": 1,
      "first_name": "Evelin",
      "last_name": "Adenet",
      "email": "eadenet0@thetimes.co.uk",
      "gender": "Male",
      "fee_balance": 4274
    }, {
      "id": 2,
      "first_name": "Cosme",
      "last_name": "Vollam",
      "email": "cvollam1@netvibes.com",
      "gender": "Male",
      "fee_balance": 2748
    }, {
      "id": 3,
      "first_name": "Worthington",
      "last_name": "McKiddin",
      "email": "wmckiddin2@e-recht24.de",
      "gender": "Male",
      "fee_balance": 4578
    }, {
      "id": 4,
      "first_name": "Noel",
      "last_name": "Whybrow",
      "email": "nwhybrow3@reuters.com",
      "gender": "Male",
      "fee_balance": 2315
    }, {
      "id": 5,
      "first_name": "Danella",
      "last_name": "Skehan",
      "email": "dskehan4@cnn.com",
      "gender": "Female",
      "fee_balance": 2193
    }, {
      "id": 6,
      "first_name": "Shanta",
      "last_name": "Hentzeler",
      "email": "shentzeler5@sakura.ne.jp",
      "gender": "Female",
      "fee_balance": 4290
    }, {
      "id": 7,
      "first_name": "Scotti",
      "last_name": "Pigeram",
      "email": "spigeram6@vinaora.com",
      "gender": "Male",
      "fee_balance": 4191
    }, {
      "id": 8,
      "first_name": "Ludovico",
      "last_name": "Hurren",
      "email": "lhurren7@dailymotion.com",
      "gender": "Genderfluid",
      "fee_balance": 4712
    }, {
      "id": 9,
      "first_name": "Cale",
      "last_name": "Kapelhoff",
      "email": "ckapelhoff8@com.com",
      "gender": "Male",
      "fee_balance": 2498
    }, {
      "id": 10,
      "first_name": "Stephi",
      "last_name": "Kember",
      "email": "skember9@unc.edu",
      "gender": "Female",
      "fee_balance": 748
    }
   ];
   console.log(App)
   // CURRENT STATE OF DATA
   const [data, setData] = useState(initialData);
   //FUNCTION TO DELETE PERSON ACCORDING TO ID
   const deletePerson = (id) => {
     setData(data.filter(person => person.id !== id));
   };
   // FUNCTION TO ADD PERSON TO LIST 
   const addPerson = (newPerson) => {
     //DETAILS OF NEW PERSON
     setData([...data, { ...newPerson, id: data.length + 1 }]);
   };
   //FUNCTION TO UPDATE INFO OF PEOPLE IN LIST
   const updatePerson = (id, updatedInfo) => {
     setData(data.map(person => person.id === id ? { ...person, ...updatedInfo } : person));
   };
return (
    
  <div className="App">
      <h1>PEOPLE </h1>
      
      <List data={data} deletePerson={deletePerson} updatePerson={updatePerson} />
      <button className="button"
        onClick={() => addPerson({ first_name: "New", last_name: "User", email: "newuser@gmail.com", gender: "Male/Female/...", fee_balance: 2000 })}>
        New User
      </button>



    </div>
  )
}

export default App

