import React, {useState} from 'react';
import {
    DialogContent, DialogTitle,
    FormControl,
    FormLabel,
    Grid, Paper,
    Radio,
    TextField, Typography,
} from '@material-ui/core'
import ResourceStatusPayload, {StockStatus} from "../../api/model/ResourceStatusPayload";
import Button from "@material-ui/core/Button";
import {common} from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core/styles";


interface CoronaFormProps {
    visible?: boolean,
    onSubmitted: (values: ResourceStatusPayload) => void,
}

interface NumberFieldProps {
    label: string,
    value: number,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

interface StatusFieldProps {
    label: string,
    value: string,
    possibleValues: string[],
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const NumberField = (props: NumberFieldProps) => {
    const {
        label,
        value,
        onChange
    } = props;
    return (
        <TextField fullWidth={true} type={"number"} label={label} value={value === 0 ? null : value} onChange={onChange}/>
    );
};

const useStyle = (color: string, checkedColor: string) => makeStyles({
    root: {
        color: color,
        "&$checked": {
            color: checkedColor
        },
    },
    checked: {},
});

const StatusField = (props: StatusFieldProps) => {
    const {
        label,
        value,
        possibleValues,
        onChange,
    } = props;
    const styles = [
        useStyle("#81c784", "#4caf50")(),
        useStyle("#ffb74d", "#ff9800")(),
        useStyle("#e57373", "#f44336")(),
        useStyle(common.black, common.black)(),
    ];
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} style={{ textAlign: "right", marginTop: "10px"}}><FormLabel>{ label }:</FormLabel></Grid>
            {possibleValues && possibleValues.map((item, index) => (
                <Grid item xs={1}>
                    <Radio
                        classes={{
                            root: styles[index].root,
                            checked: styles[index].checked,
                        }}
                        checked={value === item}
                        onChange={onChange}
                        value={item}
                        inputProps={{ "aria-label": label }}
                    />
                </Grid>
        ))}
        </Grid>
    )
};

const initialState: ResourceStatusPayload = {
    nrOfVirusPatients: 0,
    nrOfVirusPatientsInICU: 0,
    nrOfVirusPatientsInICULvl3: 0,
    nrOfFreeBeds: 0,
    nrOfFreeVentilators: 0,
    nrOfNursesNeeded: 0,
    nrOfPhysiciansNeeded: 0,
    masksStockStatus: StockStatus.OK,
    disinfectantStockStatus: StockStatus.OK,
    protectiveGearStockStatus: StockStatus.OK,
    antibioticsStockStatus: StockStatus.OK,
    antiPneumoniaDrugStockStatus: StockStatus.OK,
};

const CoronaForm = (props: CoronaFormProps) => {
    const { onSubmitted, visible } = props;
    const [values, setValues] = useState<ResourceStatusPayload>(initialState);

    const possibleValues = Object.keys(StockStatus);

    const updateNumberField = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setValues({ ...values, [field]: (parseInt(event.target.value) || 0)})
    };

    const mapStringToStatus = (value: string): StockStatus => {
        switch (value) {
            case "OK":
                return StockStatus.OK;
            case "LOW":
                return StockStatus.LOW;
            case "CRITICAL":
                return StockStatus.CRITICAL;
            case "OUT_OF_STOCK":
                return StockStatus.OUT_OF_STOCK;
            default:
                return StockStatus.OK;
        }
    };

    const updateStatusField = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setValues({ ...values, [field]: mapStringToStatus(event.target.value)})
    };

    return (
        <DialogContent style={{
            width: "500px",
            margin: "0 auto"
        }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Aktueller Status
                </Typography>
            <Paper variant={"outlined"} style={{ padding: "0 10px", marginBottom: 15 }}>
                <FormControl style={{ width: "100%" }}>
                    <NumberField
                        label={"COVID-19 Patienten"}
                        value={values.nrOfVirusPatients}
                        onChange={(event => updateNumberField(event, "nrOfVirusPatients"))}
                    />
                    <NumberField
                        label={"COVID-19 Patienten in ICU"}
                        value={values.nrOfVirusPatientsInICU}
                        onChange={(event => updateNumberField(event, "nrOfVirusPatientsInICU"))}
                    />
                    <NumberField
                        label={"COVID-19 Patienten in ICU level 3"}
                        value={values.nrOfVirusPatientsInICULvl3}
                        onChange={(event => updateNumberField(event, "nrOfVirusPatientsInICULvl3"))}
                    />
                    <NumberField
                        label={"Freie Betten"}
                        value={values.nrOfFreeBeds}
                        onChange={(event => updateNumberField(event, "nrOfFreeBeds"))}
                    />
                    <NumberField
                        label={"Anzahl benötigter Krankenpfleger"}
                        value={values.nrOfNursesNeeded}
                        onChange={(event => updateNumberField(event, "nrOfNursesNeeded"))}
                    />
                    <NumberField
                        label={"Anzahl benötigter Ärzte"}
                        value={values.nrOfPhysiciansNeeded}
                        onChange={(event => updateNumberField(event, "nrOfPhysiciansNeeded"))}
                    />
                    <NumberField
                        label={"Verfügbare Respiratoren"}
                        value={values.nrOfFreeVentilators}
                        onChange={(event => updateNumberField(event, "nrOfFreeVentilators"))}
                    />
                </FormControl>
                <div style={{ margin: "20px 0px" }}>
                    <StatusField
                        label={"Status Mundschutz"}
                        value={values.masksStockStatus}
                        possibleValues={possibleValues}
                        onChange={(event => updateStatusField(event, "masksStockStatus"))}
                    />
                    <StatusField
                        label={"Status Sterilium"}
                        value={values.disinfectantStockStatus}
                        possibleValues={possibleValues}
                        onChange={(event => updateStatusField(event, "disinfectantStockStatus"))}
                    />
                    <StatusField
                        label={"Status Schutzkleidung"}
                        value={values.protectiveGearStockStatus}
                        possibleValues={possibleValues}
                        onChange={(event => updateStatusField(event, "protectiveGearStockStatus"))}
                    />
                    <StatusField
                        label={"Status Antibiotika"}
                        value={values.antibioticsStockStatus}
                        possibleValues={possibleValues}
                        onChange={(event => updateStatusField(event, "antibioticsStockStatus"))}
                    />
                    <StatusField
                        label={"Status Pneumonie Medikamente"}
                        value={values.antiPneumoniaDrugStockStatus}
                        possibleValues={possibleValues}
                        onChange={(event => updateStatusField(event, "antiPneumoniaDrugStockStatus"))}
                    />
                </div>
            </Paper>
            { visible && (<Button color={"primary"} variant={"contained"} onClick={() => onSubmitted(values)}>Daten senden!</Button>) }
        </DialogContent>
    )
};

export default CoronaForm;
