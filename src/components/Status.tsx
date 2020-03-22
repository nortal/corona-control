import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CoronaForm from './views/CoronaForm';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import ResourceStatusPayload from "../api/model/ResourceStatusPayload";
import {createOrUpdateDoc} from "../helpers/elastic";
import Hospital from "../api/model/Hospital";
import {getHospitalById} from "../helpers/data";
import {RouteComponentProps} from "react-router";
import {Alert, AlertTitle} from "@material-ui/lab";

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

enum SubmissionStatus {
    INITIAL, OK, ERROR
}

const SuccessBox = ({ status }: {status: SubmissionStatus}) => (
        <div style={{ position: "absolute", left: "50%", top: "40%"}}>
            <div style={{position: "relative", left: "-50%", bottom: "-60%", opacity: 0.85}}>
                { status === SubmissionStatus.OK && (<Alert variant="outlined" severity="success" color={undefined}>
                    <AlertTitle>Successfully submitted the data!</AlertTitle>
                    Redirecting to dashboard...
                </Alert>)}
            </div>
        </div>
);

const Status = ({ match, history }: RouteComponentProps<{ hospitalId: string }>) => {
    const [status, setStatus] = useState<SubmissionStatus>(SubmissionStatus.INITIAL);

    const classes = useStyles();
    const hospitalId = match.params.hospitalId;
    const hospital: (Hospital | undefined) = getHospitalById(hospitalId);

    const successCallback = (response: any) => {
        setStatus(SubmissionStatus.OK);
        setTimeout(() => history.push("/hospitals"), 1000);
    };
    const errorCallback = (error: any) => {
        setStatus(SubmissionStatus.ERROR);
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
            <div className={ status === SubmissionStatus.OK ? "hidden" : "shown" }>
                <CoronaForm visible={ status !== SubmissionStatus.OK } onSubmitted={sendData} />
            </div>
            <SuccessBox status={status}/>
        </>
    );
};

export default Status;
