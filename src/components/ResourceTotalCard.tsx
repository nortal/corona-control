import {StockStatus} from "../api/model/ResourceStatusPayload";
import {RatioLineProps} from "./RatioLine";
import {RouteComponentProps, withRouter} from "react-router";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import RatioLine from "./RatioLine";
import StakeHolderStatusBlock from "./StakeHolderStatusBlock";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: 145,
        width: 363,
        marginRight: 14,
        marginBottom: 36
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 8,
    },
});

const centeredBlockStyle = {
    alignItems: "center",
    textAlign: 'center' as 'center'
};

const counterTextStyle = {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "bold" as 'bold',
    fontSize: "32px",
    lineHeight: "44px",
    color: "#5272E1"
};

const labelStyle = {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal" as 'normal',
    fontSize: "18px",
    lineHeight: "28px",
    color: "#1A1A1A"
};

export interface ResourceTotalCardProps {
    iconSrc: string,
    label: string,
    numberTotal: number
}

const ResourceTotalCard = ({ iconSrc, label, numberTotal }: ResourceTotalCardProps & RouteComponentProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
               <div style={centeredBlockStyle}>
                   <img src={iconSrc} />
                    <Typography style={counterTextStyle}>
                        {numberTotal}
                    </Typography>
                   <Typography style={labelStyle}>
                       {label}
                   </Typography>
               </div>
            </CardContent>
        </Card>
    );
};

export default withRouter(ResourceTotalCard);