import Button from '@mui/material/Button';
import { Axios, useEffectCustom } from '../../../components/index';
import { useState } from 'react';



const DeleteButton = (props) => {

  const [isDelete, setIsDelete] = useState(false);

  const onDelete = () => {
    setIsDelete(true);
  }

  useEffectCustom(() => {
    const deleteTask = async () => {
      await Axios.delete(`/tasks/delete/${props.id}`)
        .then((_) => {
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
      
    };
    deleteTask();
  }, [isDelete]);

  return (
      <Button
        onClick={onDelete}
        variant="contained"
        color={props.color}
        style={{ marginRight: '1vw' }}
      >
        {props.name}
      </Button>
  )
}

export default DeleteButton;