import React from 'react';

const containerStyle = {
  display: "table",
  width: "100%",
    height: "5px",
    marginTop: "15px",
    marginBottom: "15px"
};

const okStyle = {
    display: "table-cell",
    height: "100%",
    backgroundColor: "green"
};

const lowStyle = {
    display: "table-cell",
    height: "100%",
    backgroundColor: "orange"
};

const criticalStyle = {
    display: "table-cell",
    height: "100%",
    backgroundColor: "red"
};

const outOfSockStyle = {
    display: "table-cell",
    height: "100%",
    backgroundColor: "gray"
};


export interface RatioLineProps {
    nrOk: number,
    nrLow: number,
    nrCritical: number,
    nrOutOfStock: number
}

const RatioLine = ({nrOk, nrLow, nrCritical, nrOutOfStock} : RatioLineProps) => {
    const total = nrOk + nrLow + nrCritical + nrOutOfStock;
    const percentOk = Math.round((nrOk / total) * 100);
    const percentLow = Math.round((nrLow / total) * 100);
    const percentCritical = Math.round((nrCritical / total) * 100);
    const percentOutOfStock = Math.round((nrOutOfStock / total) * 100);

    return (<div style={containerStyle}>
        <div style={{...outOfSockStyle, width: percentOutOfStock + "%"}}/>
        <div style={{...criticalStyle, width: percentCritical + "%"}}/>
        <div style={{...lowStyle, width: percentLow + "%"}}/>
        <div style={{...okStyle, width: percentOk + "%"}}/>
    </div>);
};

export default RatioLine;