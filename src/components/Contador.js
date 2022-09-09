import { useDispatch, useSelector } from "react-redux";



export function Contador() {

  const contador = useSelector((state) => { return state.counter })
  const dispatch = useDispatch();

  return (
    <div>
      <div>{contador}</div>
      <button onClick={() => { dispatch({ type: 'decrement' }) }}>-</button>
      <button onClick={() => { dispatch({ type: 'increment' }) }}>+</button>
    </div >
  )
}