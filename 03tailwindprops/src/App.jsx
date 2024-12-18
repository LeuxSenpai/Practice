import Card from '../component/Card';
import './App.css'
const someobj ={
username:"Aman",
age:27
};
const newArr = [1,2,3]
function App() {
  return (
    <>
    <Card gameID='ligga' obj={someobj} arr={newArr}/>
    <Card gameID='sunil'/>
    <Card gameID='moon'/>
    <Card gameID='meow'/>
    </>
  );
}

export default App
