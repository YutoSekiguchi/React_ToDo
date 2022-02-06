import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

const MovePostButton = () => {
  return (
    <>
      <Link to="/post">
        <AddCircleIcon 
          fontSize='large'
          color='warning'
        />
      </Link>
    </>
  )
}

export default MovePostButton;