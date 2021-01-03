import React, { FunctionComponent } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
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

const AppDenied: FunctionComponent<RouteComponentProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h1>CUNA Mutual - Loan Application</h1>
      </div>
      <div>
        <p>
          Your loan has been denied. Please contact customer services at the
          information below.
        </p>
        <label>
          Phone: (111) 111-2222 or
          email: contactinfo@cunamutual.com
        </label>
      </div>
    </div>
  );
};

export default AppDenied;
