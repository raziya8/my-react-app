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
import { useState } from "react";
function App() {

const [cart, setCart] = useState([]);


const totalPrice = cart.reduce(
  (total, product) => total + product.price * product.quantity,
  0
);

  const [search, setSearch] = useState("");
  const isLoggedIn = true;
  // const isLoggedIn = false;
 const fruits = ["Apple","Mango","Banana"];
 const products = [
  { name: "Shoes", price: 999 },
  { name: "Bag", price: 499 },
  { name: "watch ", price :799}
];
 const filteredProducts = products.filter(
  (product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
);
 return ( 

    <div>

    <p>Cart Items: {cart.length}</p>

<p>Total Price: ₹{totalPrice}</p>

    
<h2>My Products</h2>

<h2>My Cart</h2>
{cart.length === 0 ? (
  <p>Your cart is empty!</p>
) : (
  <p>You have items in your cart.</p>
)}

{cart.map((product, index) => (
  <p key={index}>
    {product.name} - ₹{product.price} | Qty: {product.quantity}
    {" "}
    <button
  onClick={() =>
    setCart(
      cart.map((item, i) =>
        i === index
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }
>
  +
</button>
<button
  onClick={() =>
    setCart(
      cart.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }
>
  -
</button>
    <button
      onClick={() =>
        setCart(cart.filter((item, i) => i !== index))
      }
    >
      Remove
    </button>
  </p>
))}


<p>Products found: {filteredProducts.length}</p>
<input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

{filteredProducts.length === 0 && (
  <p>No products found!</p>
)}

{filteredProducts.map((product) => (
  <div key={product.name}>
    <p>
  {product.name} - ₹{product.price} | Qty: {product.quantity || 1}
    </p>


    <button
  onClick={() => {
    const existingProduct = cart.find(
      (item) => item.name === product.name
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }}
>
  Add to Cart
</button>

  </div>
))}



{/* const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
); */}
      
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

