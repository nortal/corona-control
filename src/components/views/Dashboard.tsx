import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, CircularProgress } from '@material-ui/core';
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
        backgroundColor: "#E7E6E6",
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'row',
    },
    fixedHeight: {
        height: 240,
    },
    loader: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
}));

const sampleStatistics = [{label: "Chirurgische Masken", nrOk: 50, nrLow: 150, nrCritical: 50, nrOutOfStock: 250,
    stakeholderStatuses: [
        {"name": "UNI Klinikum Düsseldorf", contact: " 0211 8100", stockStatus: StockStatus.CRITICAL},
        {"name": "Evangelisches Krankenhaus Düsseldorf", contact: " 0211 9190", stockStatus: StockStatus.OK},
        {"name": "Augusta-Krankenhaus", contact: " 0211 8100", stockStatus: StockStatus.CRITICAL},
        {"name": "Florence-Nightingale-Krankenhaus", contact: " 0211 8100", stockStatus: StockStatus.OUT_OF_STOCK},
        {"name": "St. Vinzenz-Krankenhaus", contact: " 0211 8100", stockStatus: StockStatus.OUT_OF_STOCK}]},
    {label: "Disinfectant", nrOk: 150, nrLow: 27, nrCritical: 250, nrOutOfStock: 250,
        stakeholderStatuses: [
            {"name": "UNI Klinikum Düsseldorf", contact: " 0211 8100", stockStatus: StockStatus.CRITICAL},
            {"name": "Evangelisches Krankenhaus Düsseldorf", contact: " 0211 9190", stockStatus: StockStatus.OK},
            {"name": "Augusta-Krankenhaus", contact: " 0211 8100", stockStatus: StockStatus.CRITICAL},
            {"name": "Florence-Nightingale-Krankenhaus", contact: " 0211 8100", stockStatus: StockStatus.OUT_OF_STOCK},
            {"name": "St. Vinzenz-Krankenhaus", contact: " 0211 8100", stockStatus: StockStatus.OUT_OF_STOCK}
        ]}];

const sampleResourceTotals = [
    {label: "COVID-19 Patienten", iconSrc: people, numberTotal: 234},
    {label: "Intensiv Patienten", iconSrc: ICU, numberTotal: 13},
    {label: "Kritische Patienten", iconSrc: ICU, numberTotal: 2},
    {label: "Freie Betten", iconSrc: bed, numberTotal: 1203},
    {label: "Beatmungsgeräte", iconSrc: bed, numberTotal: 457},
    ];

const Dashboard = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
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
            <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    {resourceTotals.map((resourceTotal) => <ResourceTotalCard {...resourceTotal}/>)}
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    {resourceStatistics.map((resourceStat) => <ResourceStatisticsCard {...resourceStat}/>)}
                </Paper>
            </Grid>
        </Grid>
    ) : <div className={classes.loader}><CircularProgress /></div>;
};

export default Dashboard;