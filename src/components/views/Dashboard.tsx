import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import ResourceStatisticsCard, {ResourceStatisticsCardProps} from "../ResourceStatisticsCard";
import {StockStatus} from "../../api/model/ResourceStatusPayload";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 960,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'row',
    },
    fixedHeight: {
        height: 240,
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

const Dashboard = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [resourceStatistics, setResourceStatistics] = useState<ResourceStatisticsCardProps[]>(sampleStatistics);


    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>

                </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    {resourceStatistics.map((resourceStat) => <ResourceStatisticsCard {...resourceStat}/>)}
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Dashboard;