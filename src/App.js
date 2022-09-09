import './App.css';
import { Cabecalho } from './components/Cabecalho';
import { Contador } from './components/Contador';
import { combineReducers, createStore } from 'redux'
import { ContadorReducer } from './reducers/contadorReducer';
import { Provider } from 'react-redux';

function App() {


  const allRedurcers = combineReducers({ counter: ContadorReducer })
  //na hora de chamar chamamos pela chave.


  //criando o store 
  const store = createStore(allRedurcers);

  return (
    <header>
      <Provider store={store}>
        <Cabecalho />
        <Contador />
      </Provider>
    </header>
  );
}

export default App;
