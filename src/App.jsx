// // function Welcome(){
// //   return <h1>Welcome</h1>;
// // }
// // export default Welcome;
// // *****
// // function Journey (){
// //   return (
// //     <div>
// //       <h1>Hello, Raziya!</h1>
// //       <p>I'm Learning React step by step.</p>
// //     </div>
// //   );
// // }
// // export  default Journey;
// function Welcome (props){
//   return <h1> Hello , {props.name}!</h1>;

// }
// function App(){
//   return(
//     <div>
//       <Welcome name="Raziya"/>
//       <Welcome name="Rahul"/>
//       <Welcome name="Anaya"/>
//     </div>
//   );
// }
// export default App;

// -----*********//
// import {useState} from "react";
// function App(){
// const [count ,setCount] = useState(0);
// return(
//   <div>
//     <h1>Counter: {count}</h1> 
//     <button onClick={() => {
//   if (count < 10) {
//     setCount(count + 1);
//   }
// }}>
//   Increase
// </button>
//     <button onClick={() => {
//   if (count > 0) {
//     setCount(count - 1);
//   }
// }}>
//   Decrease
// </button>
//     <button onClick={() => setCount(0)}>
//  reset
//     </button>
//     </div>
// );
// }
// export default App;

// *************use of Button with help of props////

import Button from "./Button";
import Card from "./Card";
import "./App.css";

function App() {
  const isLoggedIn = true;
  // const isLoggedIn = false;
 const fruits = ["Apple","Mango","Banana"];
  return ( 

    <div>
      <h2>My Fruits</h2>

{fruits.map((fruit) => (
  <p key={fruit}>{fruit}</p>
))}
      <h1>My App</h1>

      <Card>Hello Raziya!</Card>
      <h2> Welcome to react </h2>
      <p>I am learning props.children</p>
      <Card>
  <h2>Raziya's React Journey</h2>
  <p>Today I learned props.children.</p>
  <button>Continue Learning</button>
</Card>
<Card>
  <h2 style={{color:"Aqua"}}>My Goals</h2>
  <p>Learn React</p>
  <p>Build Projects</p>
</Card>
<Card>
  <h2 className="title">My Skills</h2>
  <p>HTML, CSS, JavaScript</p>
</Card>

<Card>
  <h2 style={{color: "red"}}>My Goal</h2>
  <p>Become a React Developer</p>
</Card>

      <Button text="Login" onClick={() => alert ("login clicked")} />
      <Button text="Submit" onClick={()=> alert ("Form submitted successfully!" )}/>
      <Button text="Reset"onClick={() => alert ("Reset alert")} />
      <Button text="Delete" onClick={() => alert("Item Deleted")}/>
      <Button text="Save" onClick={() => alert ("Saved ")}/>
      <Button text="Start"onClick={() => alert ("login clicked")} />
   
      <Button text="Register"onClick={() => alert ("File registered ")} />
      {/* {isLoggedIn ? <h2>Welcome Back!</h2> : <h2>Please Login</h2>} */}
      {isLoggedIn && <p>You are logged in!</p>}
    </div>

 );
}

export default App;

// <UserCard name="Raziya" />

