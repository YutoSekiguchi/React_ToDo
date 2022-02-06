import Button from '@mui/material/Button';
import { Axios } from '../../../components/index';

const PostButton = (props) => {

  const postTask = async () => {
    switch(props.taskName){
      case '':
        alert("文字を入力してください")
        break;
      case undefined:
        alert("文字を入力してください")
        break;
      default:
        await Axios.post(`/tasks`, {
          name: props.taskName
        })
          .then((_) => {
            window.location.href = '/';
          })
          .catch((e) => {
            console.log(e);
          });
    }
  };

  return (
      <Button
        variant="contained"
        color={props.color}
        onClick={postTask}
      >
        {props.buttonName}
      </Button>
  )
}

export default PostButton;