import './App.css';
import Home from './Components/Home';


function App() {
  const nameArray = ['A', 'B', 'C', 'D', 'E']
  let x = []
  return (
    <div>
      {
      nameArray.map((data, index) => (<h1>Hi {data} {index+1}</h1>))
      }
      <Home name={nameArray[0]} />
    </div>
  );
}

export default App;
