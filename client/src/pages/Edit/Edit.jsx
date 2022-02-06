import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Axios } from '../../components/index';
import CompleteEditButton from './parts/CompleteEditButton';


const Edit = () => {

  const param = useParams();

  const [taskName, setTaskName] = useState();
  const [todo, setTodo] = useState();

  const handleTaskName = (event) => {
    setTaskName(event.target.value);
  };

  useEffect(() => {
    const getTask = async () => {
      await Axios.get(`/tasks/${param.id}`)
        .then((res) => {
          setTodo(res.data[0]);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getTask();
  }, []);

  
  return (
    <>
      <div style={{ width: '80%', margin: '5vh auto 3vh' }}>
        {todo? 
          <TextField
            fullWidth
            color="secondary" focused
            id="filled-helperText"
            label="タスクを入力"
            defaultValue={todo.Name}
            autoFocus
            onChange={(event) => handleTaskName(event)}
          />: null}
      </div>
      <CompleteEditButton 
        id={ param.id }
        buttonName="変更"
        taskName={taskName}
        color="primary"
      />
    </>
  )
};

export default Edit;