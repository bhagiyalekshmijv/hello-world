import "./App.css";
import image from "./images/flower.jpg"
function App() {
  let greeting = "Hello World";
  return (
  <div>
  <h1 className="greetingStyle">{greeting}</h1>
  <img src={image}/>
  </div>
  );
}
export default App;