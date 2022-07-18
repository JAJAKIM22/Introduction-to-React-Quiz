import React from "react";
import logo from './logo.svg';
import './App.css';

/**
  Challenge: Display all users to the browser
**/
const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];
const userList = users.map((user) => {
  return <li key={user.id}>{user.name} </li>;
});

// comment this out after completion and uncomment code below it to proceed
function Child() {
  return <div>This is children content</div>;
}
/**
  Challenge: Uncomment this code to complete quiz

function Child() {
  return (
    <>
      <div>Child</div>
      <button>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child />
      </div>
    </>
  );
}
Uncomment this to tackle quiz
**/

// Comment out after completion
function Parent() {
  return (
    <div>
      <h3>Parent Component</h3>
    </div>
  );
}
// Comment above code after completion

function App() {
  const [] = React.useState(true);
  return (
    
    <>
    
    <img src="data:image/jpeg;base64,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" className="App-logo" alt="logo" />
      <h3>User names
      <ol>
        {userList}
      </ol>
      </h3>
      <ul></ul>
      <button>Hide Element Below</button>

      <div>Toggle Challenge</div>
       <h1>JSX is cool!</h1>;
      <Parent>
      <Child />
    </Parent>
    </>
  );
}

export default App;
