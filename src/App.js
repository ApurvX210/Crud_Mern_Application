import { useState ,useEffect} from 'react';
import './App.css';
import Axios from 'axios';
function App() {
  const [foodName,setFoodName]=useState('');
  const [days,setDays]=useState(0);
  const [foodList,setfoodList]=useState([]);
  useEffect(()=>{
    Axios.get("http://localhost:3001/read").then((response)=>{
      setfoodList(response.data);
    })
  },[])
  const addToList=()=>{
    Axios.post("http://localhost:3001/insert",{foodName:foodName,days:days});
  }
  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <label>Enter Food :</label>
      <input type="text" onChange={(event)=>{
        setFoodName(event.target.value)
      }}></input>
      <label>Enter Day :</label>
      <input type="number" onChange={(event)=>{
        setDays(event.target.value)
      }}></input>
      <button onClick={addToList}>Add Data</button>
      <h1>Food List</h1>
      <div className="App">
      <tbody>
        <tr>
          <th>Food Name</th>
          <th>Price</th>
        </tr>
        {foodList.map((item, index) => (
          <tr key={index}>
            <td>{item.foodName}</td>
            <td>{item.daysSinceIAte}</td>
          </tr>
        ))}
      </tbody>
    </div>
      {/* {foodList.map((val,key)=>{
        return <div key={key} className='food'>
          <h1>{val.foodName}</h1> <h2>{val.daysSinceIAte}</h2>
        </div>
      })} */}
    </div>
  );
}

export default App;
