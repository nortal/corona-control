import React from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RatioLine, {RatioLineProps} from "./RatioLine";
import {StockStatus} from "../api/model/ResourceStatusPayload";
import StakeHolderStatusBlock from "./StakeHolderStatusBlock";
import ResourceStatistics from "../api/model/Resources";

const useStyles = makeStyles({
  root: {
    width: 363,
    margin: 16,
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 8,
  },
});

const centeredBlockStyle = {
  alignSelf: "center"
};

export interface StakeHolderStatus {
  name: string,
  contact: string,
  stockStatus: StockStatus
}

export interface ResourceStatisticsCardProps extends RatioLineProps {
  label: string,
  stakeholderStatuses: StakeHolderStatus[]
}

const ResourceStatisticsCard = ({ label, stakeholderStatuses, ...ratioLineProps }: ResourceStatistics & RouteComponentProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div style={centeredBlockStyle}>
        <Typography className={classes.title} variant="body1" >
          {label}
        </Typography>
        <RatioLine {...ratioLineProps} />
        </div>
        {stakeholderStatuses.map((
            {name, contact, stockStatus}) => <StakeHolderStatusBlock name={name} contact={contact} stockStatus={stockStatus}/>)}
      </CardContent>
    </Card>
  );
};

export default withRouter(ResourceStatisticsCard);