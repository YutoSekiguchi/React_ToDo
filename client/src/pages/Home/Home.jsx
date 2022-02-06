import { useState, useEffect } from 'react';
import Title from './parts/Title';
import List from './parts/List';
import { Axios } from '../../components/index';
import MovePostButton from './parts/MovePostButton'

const Home = () => {

  const [todoList, setTodoList] = useState();


  useEffect(() => {
    const getAllTask = async () => {
      await Axios.get(`/tasks`)
        .then((res) => {
          setTodoList(res.data);
          console.log(todoList)
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getAllTask();
  }, []);

  return (
    <>
      <Title title="TODOリスト" />
      {todoList? todoList.map((listItem, i) => {
        return (
          <List 
            id={listItem.ID} 
            name={listItem.Name}
            created_at={listItem.createdAt}
            key={i} 
          />
        )
      }): null}
      <MovePostButton />
    </>
  )
};

export default Home;