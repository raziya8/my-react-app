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

function App() {
  return (
    <div>
      <h1>My App</h1>

      <Button text="Login" onClick={() => alert ("login clicked")} />
      <Button text="Submit" onClick={()=> alert ("Form submitted successfully!" )}/>
      <Button text="Reset"onClick={() => alert ("Reset alert")} />
      <Button text="Delete" onClick={() => alert("Item Deleted")}/>
      <Button text="Save" onClick={() => alert ("Saved ")}/>
      <Button text="Start"onClick={() => alert ("login clicked")} />
      <Button text="Register"onClick={() => alert ("File registered ")} />
    </div>
  );
}

export default App;

// <UserCard name="Raziya" />