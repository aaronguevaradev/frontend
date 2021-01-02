import React, { FunctionComponent } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { RouteComponentProps } from "@reach/router";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(3),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
  })
);

interface IState {
  purchasePrice: string;
  autoMake: string;
  autoModel: string;
  income: string;
  creditScore: string;
}

const LoanApplication: FunctionComponent<RouteComponentProps > = (props) => {

  const classes = useStyles();
  const [values, setValues] = React.useState<IState>({
    purchasePrice: "",
    autoMake: "",
    autoModel: "",
    income: "",
    creditScore: "",
  });

  const handleChange = (prop: keyof IState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <div>
        <h1>CUNA Mutual - Loan Application</h1>
      </div>
      <div>
        <label>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio euismod lacinia at quis. Orci ac auctor augue mauris augue neque gravida. In iaculis nunc sed augue lacus viverra vitae. Viverra accumsan in nisl nisi scelerisque eu. Velit scelerisque in dictum non. Semper quis lectus nulla at volutpat. Nisi lacus sed viverra tellus. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Facilisis gravida neque convallis a cras semper auctor neque. Et malesuada fames ac turpis. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Sapien eget mi proin sed libero enim sed. Placerat orci nulla pellentesque dignissim enim. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi.
        </label>
      </div>
      <div>
        <FormControl fullWidth={true} className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">
            Auto Purchase Price
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            value={values.purchasePrice}
            onChange={handleChange("purchasePrice")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <FormControl fullWidth={true} className={classes.margin}>
          <TextField
            onChange = {() =>0}
            id="standard-number"
            label="Auto Make"
            value={values.autoMake}
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
        <FormControl fullWidth={true} className={clsx(classes.margin)}>
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
        <FormControl fullWidth={true} className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">
            User Estimated Yearly Income
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            value={values.income}
            onChange={handleChange("income")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth={true} className={classes.margin}>
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
};

export default LoanApplication;
