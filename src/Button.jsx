function Button (props){
    return (
        <button onClick={props.onClick}>
            {props.text}
            </button>
    );
}
export default Button;
// function UserCard(props) {
//     return <h2>{props.name}</h2>;
//   }