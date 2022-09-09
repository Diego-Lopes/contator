import { useSelector } from "react-redux";



export function Cabecalho(props) {

  const contador = useSelector((state) => { return state.counter })
  return (

    <div className="container">
      <h1>Contador</h1>
      <div>{contador}</div>
    </div>
  )
}