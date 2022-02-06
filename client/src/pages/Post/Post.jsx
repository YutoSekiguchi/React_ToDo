import { useState } from 'react';
import { TextField } from '@mui/material';
import PostButton from './parts/PostButton';


const Post = () => {

  const [taskName, setTaskName] = useState();

  const handleTaskName = (event) => {
    setTaskName(event.target.value);
  };
  
  return (
    <>
      <h1 align="center">タスクを追加</h1>
      <div style={{ width: '80%', margin: '5vh auto 3vh' }}>
          <TextField
            fullWidth
            color="secondary" focused
            id="filled-helperText"
            label="タスクを入力"
            autoFocus
            onChange={(event) => handleTaskName(event)}
          />
      </div>
      <PostButton 
        buttonName="追加"
        color="error"
        taskName={taskName}
      />
    </>
  )
};

export default Post;