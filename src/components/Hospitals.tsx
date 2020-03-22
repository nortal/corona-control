import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HospitalCard from './HospitalCard';
import { Box } from '@material-ui/core';
import { getAllHospitals } from '../helpers/data';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 960,
    },
});

const Hospitals = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root} display="flex" flexWrap="wrap">
            {getAllHospitals().map(hospitalData => {
                return (
                    <HospitalCard hospital={hospitalData} key={hospitalData.id} />
                );
            })}
        </Box>
    );
}

export default Hospitals;
