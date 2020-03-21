import React from 'react';
import {
    FormControl,
    TextField,
    DialogContent,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel
} from '@material-ui/core'

const Form = () => {
    return (
        <DialogContent>
            <form>
                <FormControl>
                    <TextField type={"number"} label={"Nr of corona patients"} value={0} onChange={() => {}} margin={"small"} />
                    <TextField type={"number"} label={"Nr of corona patients in ICU"} value={0} onChange={() => {}} margin={"small"} />
                    <TextField type={"number"} label={"Nr of corona patients in ICU lvl 3"} value={0} onChange={() => {}} margin={"small"} />
                    <TextField type={"number"} label={"Nr of free beds"} value={0} onChange={() => {}} margin={"small"} />
                    <TextField type={"number"} label={"Nr of free ventilators"} value={0} onChange={() => {}} margin={"small"} />
                    <FormLabel>Status of masks in stock</FormLabel>
                    <RadioGroup value={0} onChange={() => {}}>
                        <FormControlLabel value={0} control={<Radio />} label="Out of stock" />
                        <FormControlLabel value={1} control={<Radio />} label="Critical" />
                        <FormControlLabel value={2} control={<Radio />} label="Low" />
                        <FormControlLabel value={3} control={<Radio />} label="Ok" />
                    </RadioGroup>
                    <FormLabel>Status of desinfective</FormLabel>
                    <RadioGroup value={0} onChange={() => {}}>
                        <FormControlLabel value={0} control={<Radio />} label="Out of stock" />
                        <FormControlLabel value={1} control={<Radio />} label="Critical" />
                        <FormControlLabel value={2} control={<Radio />} label="Low" />
                        <FormControlLabel value={3} control={<Radio />} label="Ok" />
                    </RadioGroup>
                    <FormLabel>Status of protective gear</FormLabel>
                    <RadioGroup value={0} onChange={() => {}}>
                        <FormControlLabel value={0} control={<Radio />} label="Out of stock" />
                        <FormControlLabel value={1} control={<Radio />} label="Critical" />
                        <FormControlLabel value={2} control={<Radio />} label="Low" />
                        <FormControlLabel value={3} control={<Radio />} label="Ok" />
                    </RadioGroup>
                    <TextField type={"number"} label={"Nr of nurses needed"} value={0} onChange={() => {}} margin={"small"} />
                    <TextField type={"number"} label={"Nr of physicians needed"} value={0} onChange={() => {}} margin={"small"} />
                    <FormLabel>Status of antibiotics</FormLabel>
                    <RadioGroup value={0} onChange={() => {}}>
                        <FormControlLabel value={0} control={<Radio />} label="Out of stock" />
                        <FormControlLabel value={1} control={<Radio />} label="Critical" />
                        <FormControlLabel value={2} control={<Radio />} label="Low" />
                        <FormControlLabel value={3} control={<Radio />} label="Ok" />
                    </RadioGroup>
                    <FormLabel>Status of anti-pneumonia</FormLabel>
                    <RadioGroup value={0} onChange={() => {}}>
                        <FormControlLabel value={0} control={<Radio />} label="Out of stock" />
                        <FormControlLabel value={1} control={<Radio />} label="Critical" />
                        <FormControlLabel value={2} control={<Radio />} label="Low" />
                        <FormControlLabel value={3} control={<Radio />} label="Ok" />
                    </RadioGroup>
                </FormControl>
            </form>
        </DialogContent>
    )
};

export default Form;
