import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { buy_item } from './components/Action';

function App() {

  const data = useSelector(state => state.reducer1);
  const data1 = useSelector(state => state.reducer2);

  console.log(data);
  console.log(data1);


  return (
    <>
      <h1>This is a App components</h1>
      <h4>count:{data}</h4>
      <h4>{data1}</h4>
      <button onClick={()=>dispatch(buy_item())} className=''>click</button>
    </>
  )
}

export default App