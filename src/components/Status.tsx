import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CoronaForm from './CoronaForm';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import ResourceStatusPayload from "../api/model/ResourceStatusPayload";
import {createOrUpdateDoc} from "../helpers/elastic";
import Hospital from "../api/model/Hospital";
import {getHospitalById} from "../helpers/data";
import {RouteComponentProps} from "react-router";

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

const Status = ({ match }: RouteComponentProps<{ hospitalId: string }>) => {
    const classes = useStyles();
    const hospitalId = match.params.hospitalId;
    const hospital: (Hospital | undefined) = getHospitalById(hospitalId)

    const successCallback = (response: any) => {
        console.log("[SUCCESS]: " + JSON.stringify(response));
    };
    const errorCallback = (error: any) => {
        console.log("[ERROR]: " + JSON.stringify(error));
    };

    const sendData = (data: ResourceStatusPayload) => {
        if (data && hospital) {
            createOrUpdateDoc(hospital.id, { ...hospital, ...data }, { successCallback, errorCallback })
        }
    };

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
            <CoronaForm onSubmitted={sendData} />
        </>
    );
}

export default Status;
