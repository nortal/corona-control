import React, {useState} from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Hospital from '../api/model/Hospital';

const useStyles = makeStyles({
  root: {
    width: 275,
    margin: 16,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 8,
  },
});

interface HospitalCardProps {
  hospital: Hospital
}

const HospitalCard = ({ hospital, history }: HospitalCardProps & RouteComponentProps) => {
  const classes = useStyles();

  const onClick = (id: string) => history.push(`status/${id}`); 

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Hospital
        </Typography>
        <Typography variant="h5" component="h2">
          {hospital.name}
        </Typography>
        <Typography color="textSecondary">
          {hospital.street} {hospital.houseNumber},<br/>
          {hospital.zipCode} {hospital.city}
        </Typography>
      </CardContent>
      <CardActions className={classes.pos} >
        <Button size="small" color="primary" onClick={()=> onClick(hospital.id)}>Status update</Button>
      </CardActions>
    </Card>
  );
}

export default withRouter(HospitalCard);