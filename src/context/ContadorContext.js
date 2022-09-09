

import { createContext, useState } from 'react';

export const ContadorContext = createContext();//criando o contexto.

export function ContadorProvider(props) { //criando a função que vai ser o provedor/provider

  const [count, setCount] = useState(0);

  return (
    <ContadorContext.Provider value={[count, setCount]}>
      {/* em prosp de contatodorContext.Provider passamos um objeto  */}
      {props.children}
    </ContadorContext.Provider>
  )
}