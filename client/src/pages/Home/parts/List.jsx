import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';


const List = (props) => {
  return (
    <>
      <Card
        style={{ width: '80%', margin: '5vh auto'}}
        variant="outlined"
      >
        <CardContent style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <Typography style={{ fontSize: '24px',  }}>
          {props.name}
        </Typography>
        <div style={{ display: 'flex' }}>
          <EditButton name='編集' color='success' id={props.id} />
          <DeleteButton name='削除' color='error' id={props.id} />
        </div>
        </CardContent>
      </Card>
    </>
  );
};

export default List;