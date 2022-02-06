import Button from '@mui/material/Button';

const EditButton = (props) => {
  return (
      <Button
        variant="contained"
        color={props.color}
        style={{ marginRight: '1vw' }}
        href={`/edit/${props.id}`}
      >
        {props.name}
      </Button>
  )
}

export default EditButton;