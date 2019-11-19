import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { flexbox } from "@material-ui/system";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    border: "2px solid black"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  spot: {
    display: flexbox,
    justifyContent: "space-between",
    direction: "column"
  }
});

export default function SimpleCard({ cartTotal }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const spot = <div className={classes.spot}>•</div>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Order Summary
        </Typography>{" "}
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {/*username */}
        </Typography>
        <hr />
        <Grid container>
          <Grid container justify="space-between" item>
            <Grid item>
              {" "}
              <Typography className={classes.pos} color="textSecondary">
                items:
              </Typography>
            </Grid>
            <Grid item>
              {" "}
              <Typography variant="body2" component="p">
                NGN ₦ 0.00
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-between" item>
            {" "}
            <Grid item>
              {" "}
              <Typography className={classes.pos} color="textSecondary">
                <strike>delivery:</strike>
              </Typography>
            </Grid>
            <Grid item>
              {" "}
              <Typography variant="body2" component="p">
                <strike> NGN ₦ 0.00 </strike>
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-between" item>
            {" "}
            <Grid item>
              {" "}
              <Typography
                variant="p"
                component="h2"
                className={classes.pos}
                color="textSecondary"
              >
                Total:
              </Typography>
            </Grid>
            <Grid item>
              {" "}
              <Typography variant="p" component="h2">
                NGN ₦ {cartTotal}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button size="large">Learn More</Button>
      </CardActions>
    </Card>
  );
}
