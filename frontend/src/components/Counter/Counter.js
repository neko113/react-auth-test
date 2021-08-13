import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increaseByValue } from "../../modules/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { number } = useSelector(({ counter }) => ({ number: counter.number }));
  const onIncreaseByValue = useCallback((value) => dispatch(increaseByValue(value)), [dispatch]);

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="h1" gutterBottom>
            {number}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Button className={classes.btn} variant="contained" color="secondary" onClick={() => onIncreaseByValue(-5)}>
            -5
          </Button>
          <Button className={classes.btn} variant="contained" color="secondary" onClick={() => onIncreaseByValue(-1)}>
            -1
          </Button>
          <Button className={classes.btn} variant="contained" color="secondary" onClick={() => onIncreaseByValue(+1)}>
            +1
          </Button>
          <Button className={classes.btn} variant="contained" color="secondary" onClick={() => onIncreaseByValue(+5)}>
            +5
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(Counter);
