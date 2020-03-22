import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CoronaForm from './views/CoronaForm';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import DirectionsRun from '@material-ui/icons/DirectionsRun';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Status = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <DirectionsRun className={classes.icon} />
                    <Typography variant="h6" className={classes.title}>
                        Corona Control - Status
                    </Typography>
                </Toolbar>
            </AppBar>
            <CoronaForm onSubmitted={(formData) => console.log(formData)} />
        </>
    );
}

export default Status;