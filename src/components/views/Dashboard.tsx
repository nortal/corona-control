import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, CircularProgress, Typography } from '@material-ui/core';
import ResourceStatisticsCard, {ResourceStatisticsCardProps} from "../ResourceStatisticsCard";
import {StockStatus} from "../../api/model/ResourceStatusPayload";
import { getDocs } from '../../helpers/elastic';
import ResourceStatistics from '../../api/model/Resources';
import { toResourceStatistics } from '../../helpers/data';

import ResourceTotalCard, {ResourceTotalCardProps} from "../ResourceTotalCard";

import ICU from "../../assets/ICU.png";
import people from "../../assets/people.png";
import bed from "../../assets/Bed.png";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 960,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    flexHorizontal: {
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'row',
    },
    fixedHeight: {
        height: 240,
    },
    title: {
        marginLeft: "45px",
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontWeight: "bold" as 'bold',
        fontSize: "44px",
        lineHeight: "78px",
        color: "#1A1A1A"
    },
	loader: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      }
}));

const sampleResourceTotals = [
    {label: "COVID-19 Patienten", iconSrc: people, numberTotal: 234},
    {label: "Intensiv Patienten", iconSrc: ICU, numberTotal: 13},
    {label: "Kritische Patienten", iconSrc: ICU, numberTotal: 2},
    {label: "Freie Betten", iconSrc: bed, numberTotal: 1203},
    {label: "Beatmungsgeräte", iconSrc: bed, numberTotal: 457},
    ];

const Dashboard = () => {
    const classes = useStyles();
    const [resourceStatistics, setResourceStatistics] = useState<ResourceStatistics[]>();
    const [resourceTotals, setResourceTotals] = useState<ResourceTotalCardProps[]>(sampleResourceTotals);

    const successCallback = (response: any) => {
        setResourceStatistics(toResourceStatistics(response.data.hits.hits));
        console.log("resourceStatistics", JSON.stringify(resourceStatistics));
    };

    useEffect(() => {
        getDocs({ successCallback });
    }, []);

    return resourceStatistics ? (
        <Grid container spacing={3}>
            <Typography className={classes.title}>Krankenhäuser Düsseldorf</Typography>
            <Grid item xs={12}>
                <div className={classes.paper}>
                    <div style={{marginLeft: "16px"}}>
                        <div className={classes.flexHorizontal} >
                            {resourceTotals.map((resourceTotal) => <ResourceTotalCard {...resourceTotal}/>)}
                        </div>
                        <div className={classes.flexHorizontal} >
                        {resourceStatistics.map((resourceStat) => <ResourceStatisticsCard {...resourceStat}/>)}
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    ) : <div className={classes.loader}><CircularProgress /></div>;
};

export default Dashboard;