import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

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
    fixedHeight: {
        height: 240,
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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

                </Paper>
            </Grid>
        </Grid>
    );
}

export default Dashboard;