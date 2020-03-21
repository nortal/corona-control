import React, {useState} from 'react';
import {DialogContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from '@material-ui/core'
import ResourceStatusPayload, {StockStatus} from "../api/model/ResourceStatusPayload";
import Button from "@material-ui/core/Button";


interface CoronaFormProps {
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
        <TextField type={"number"} label={label} value={value} onChange={onChange}/>
    );
};

const StatusField = (props: StatusFieldProps) => {
    const {
        label,
        value,
        possibleValues,
        onChange,
    } = props;
    return (
        <>
            <FormLabel>{ label }</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
                {possibleValues && possibleValues.map(item => (<FormControlLabel control={<Radio/>} value={item} label={item}/>)) }
            </RadioGroup>
        </>
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
    const { onSubmitted } = props;
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
        <DialogContent>
            <form>
                <FormControl>
                    <NumberField
                        label={"Number of corona patients"}
                        value={values.nrOfVirusPatients}
                        onChange={(event => updateNumberField(event, "nrOfVirusPatients"))}
                    />
                    <NumberField
                        label={"Number of corona patients in ICU"}
                        value={values.nrOfVirusPatientsInICU}
                        onChange={(event => updateNumberField(event, "nrOfVirusPatientsInICU"))}
                    />
                    <NumberField
                        label={"Number of corona patients in ICU lvl 3"}
                        value={values.nrOfVirusPatientsInICULvl3}
                        onChange={(event => updateNumberField(event, "nrOfVirusPatientsInICULvl3"))}
                    />
                    <NumberField
                        label={"Number of free beds"}
                        value={values.nrOfFreeBeds}
                        onChange={(event => updateNumberField(event, "nrOfFreeBeds"))}
                    />
                    <NumberField
                        label={"Number of nurses needed"}
                        value={values.nrOfNursesNeeded}
                        onChange={(event => updateNumberField(event, "nrOfNursesNeeded"))}
                    />
                    <NumberField
                        label={"Number of free physicians needed"}
                        value={values.nrOfPhysiciansNeeded}
                        onChange={(event => updateNumberField(event, "nrOfPhysiciansNeeded"))}
                    />
                    <NumberField
                        label={"Number of free ventilators"}
                        value={values.nrOfFreeVentilators}
                        onChange={(event => updateNumberField(event, "nrOfFreeVentilators"))}
                    />
                    <StatusField
                        label={"Status of masks in stock"}
                        value={values.masksStockStatus}
                        possibleValues={possibleValues}
                        onChange={(event => updateStatusField(event, "masksStockStatus"))}
                    />
                    <StatusField
                        label={"Status of desinfectant"}
                        value={values.disinfectantStockStatus}
                        possibleValues={possibleValues}
                        onChange={(event => updateStatusField(event, "disinfectantStockStatus"))}
                    />
                    <StatusField
                        label={"Status of protective gear"}
                        value={values.protectiveGearStockStatus}
                        possibleValues={possibleValues}
                        onChange={(event => updateStatusField(event, "protectiveGearStockStatus"))}
                    />
                    <StatusField
                        label={"Status of antibiotics"}
                        value={values.antibioticsStockStatus}
                        possibleValues={possibleValues}
                        onChange={(event => updateStatusField(event, "antibioticsStockStatus"))}
                    />
                    <StatusField
                        label={"Status of anti-pneumonia drugs"}
                        value={values.antiPneumoniaDrugStockStatus}
                        possibleValues={possibleValues}
                        onChange={(event => updateStatusField(event, "antiPneumoniaDrugStockStatus"))}
                    />
                </FormControl>
            </form>
            <Button variant={"contained"} onClick={() => onSubmitted(values)}>Send the data!</Button>
        </DialogContent>
    )
};

export default CoronaForm;
