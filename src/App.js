import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from './/store/index'

function App() {
 const counter = useSelector((state)=>state.counter);
   const dispatch= useDispatch();
  const increment =()=>{
      dispatch(actions.increment());
   }
   const decrement =()=>{
       dispatch(actions.decrement());
   }
   const addby =()=>{
      dispatch(actions.addby(10));
  }
  return (
  <div>
       <h1 className='h'> Assefa's Counter</h1>
      <h2>{counter}</h2>
      <button className='bt1' onClick={increment}>inc</button>
      <button className='bt2' onClick={decrement}>dec</button>
      <button className='bt3' onClick={addby}>+10</button> 
  </div>
    
  );
}

export default App;

