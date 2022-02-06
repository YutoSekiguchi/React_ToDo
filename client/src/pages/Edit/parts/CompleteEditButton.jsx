import Button from '@mui/material/Button';
import { Axios } from '../../../components/index';

const CompleteEditButton = (props) => {

  const changeTask = async () => {
    await Axios.put(`/tasks/edit/${props.id}`, {
      name: props.taskName
    })
      .then((_) => {
        window.location.href = '/';
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
      <Button
        variant="contained"
        color={props.color}
        onClick={changeTask}
      >
        {props.buttonName}
      </Button>
  )
}

export default CompleteEditButton;