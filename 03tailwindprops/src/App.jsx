import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "rahul",
    age:20
  }
  let newArr = [1,2,3,4]
  return (
    <>
      <h1 className="bg-green-500 rounded-lg p-2 mb-7">Tailwind Test</h1>
      <Card username="chaiaurcode" someObje = {newArr} btnText = "Click me"/>
      <Card username="rahul" btnText = "Visit me"/>
      <Card username="bhanu" />
      
    </>
  );
}

export default App;
