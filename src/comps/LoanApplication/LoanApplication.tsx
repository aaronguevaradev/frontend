import React, {FunctionComponent}from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

interface IProps {
    userLoggedIn: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(3),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }),
);

interface State {
  purchasePrice: string;
  autoMake:string;
  autoModel:string;
  income:string;
  creditScore:string;
}

const LoanApplication: FunctionComponent<IProps> = props =>{
const {userLoggedIn} = props;

const classes = useStyles();
const [values, setValues] = React.useState<State>({
  purchasePrice: '',
  autoMake: '',
  autoModel: '',
  income: '',
  creditScore: '',
});

const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  setValues({ ...values, [prop]: event.target.value });
};

return (
  <div className={classes.root}>
    <div>
      <h1>CUNA Mutual - Loan Application</h1>
    </div>
    <div>
    <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">Auto Purchase Price</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={values.purchasePrice}
          onChange={handleChange('purchasePrice')}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin} >
      <TextField
          id="standard-number"
          label="Auto Make"
          value={values.autoMake}
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
      <FormControl  fullWidth className={clsx(classes.margin)}>
      <TextField
          id="standard-number"
          label="Auto Model"
          value={values.autoModel}
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">User Estimated Yearly Income</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={values.income}
          onChange={handleChange('income')}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>

      <FormControl fullWidth className={classes.margin}>
      <TextField
          id="standard-number"
          label="User Estimated Credit Score"
          type="number"
          helperText="Please enter your credit score (300-850)"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
    </div>
    
  </div>
);

} 

export default LoanApplication;