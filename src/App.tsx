import React, {useState, useEffect} from "react";
import Todo from "./component/Todo";
import NewTodo from "./component/NewTodo";

interface StateType {
  id: string, task: string
}

const App: React.FC = () => {
  // const [data, setData] = useState<{id: string, task: string}[]>([]); // Both are valid
  const [data, setData] = useState<StateType[]>([]);

  useEffect( () => {
    console.log(data)
  }, [data]);

  const addHandler = (e: string) => {
    setData(x => [...x, {id: Math.random().toString(), task: e}])
  };

  const removeHandler = (e: string) => {
    const list = [...data];
    const newList = list.filter(x => x.id !== e);
    setData(newList)
  };

  return (
    <div>
      <NewTodo onAdd={addHandler} />
      <Todo items={data} onRemove={removeHandler} />
    </div>
  );
}

export default App;
