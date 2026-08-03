import {useState} from 'react';
function App() {
  const [ Firstname , setFirstname] = useState("");
  const [ Lastname , setLastName] = useState("");

  return (
      <div>
        <h1> React input example</h1>
        <input type ="text"
        placeholder= "Enter your first name"
        onChange={(event) => setFirstname(event.target.value)}
        />
        <input type ="text"
        placeholder= "Enter your last name"
        onChange={(event) => setLastName(event.target.value)}
        />
        <h2> Hello {Firstname} {Lastname}</h2>
      </div>
  
  );
  
}
export default App;

