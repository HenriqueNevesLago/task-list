import { useState } from "react";
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Comprar o Pão na Padaria',
      done: false
    },
    {
      id: 1,
      name: 'Fazer compras no mercado',
      done: true
    }
  ])
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        {list.map((item, index) => (
          <ListItem key={index} item={item}></ListItem>
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App;