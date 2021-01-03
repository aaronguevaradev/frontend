import React, { FunctionComponent } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
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
  UserName: string;
  Password: string;
}

const NewAccountPage: FunctionComponent<RouteComponentProps> = (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState<IState>({
    UserName: "",
    Password: "",
  });

  const handleChange = (prop: keyof IState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <div>
        <h1>CUNA Mutual - New Account Creation</h1>
      </div>
      <div>
        <label>
          In iaculis nunc sed augue lacus viverra vitae. Viverra
          accumsan in nisl nisi scelerisque eu. Velit scelerisque in dictum non.
          Semper quis lectus nulla at volutpat. Nisi lacus sed viverra tellus.
          Placerat vestibulum lectus mauris ultrices eros in cursus turpis
          massa. Facilisis gravida neque convallis a cras semper auctor neque.
          Et malesuada fames ac turpis. Gravida cum sociis natoque penatibus et
          magnis dis parturient montes. 
        </label>
      </div>
      <div>
        <FormControl fullWidth={true} className={clsx(classes.margin)}>
          <TextField
            required
            id="standard-required"
            label="User Name"
            type="text"
          />
        </FormControl>
        <FormControl fullWidth={true} className={classes.margin}>
          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
          />
        </FormControl>
        <FormControl fullWidth={true} className={classes.margin}>
          <TextField
            required
            id="standard-password-input"
            label="Re-type Password"
            type="password"
          />
        </FormControl>
        <FormControl fullWidth={true} className={classes.margin}>
        <Button variant="contained" color="primary" disableElevation>
            Create Account
        </Button>
        </FormControl>
      </div>
    </div>
  );
};

export default NewAccountPage;
