import React, { FunctionComponent } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";


interface IProps {
  userLoggedIn: boolean;
} 

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

interface State {
  userFeedback: string;
}

const DeniedApplication: FunctionComponent<IProps> = (props) => {
  const { userLoggedIn } = props;

  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    userFeedback: ""
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <div>
        <h1>CUNA Mutual - Loan Application</h1>
        <p>Your application has been denied</p>
      </div>
    
    </div>
  );
};

export default DeniedApplication;
