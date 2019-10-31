import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocalPhone from "@material-ui/icons/LocalPhone";
import Lock from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import styles from "../../Theme/MuiTheme";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
class SignUp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Container>
          <Grid container item justify="center" alignItems="center" xs={12}>
            <Grid item xs={12}>
              <Typography
                className={classes.headingText}
                gutterBottom
                variant="h6"
                component="h6"
              >
                Sign Up
              </Typography>
            </Grid>
            <Grid
              container
              item
              justify="center"
              alignItems="center"
              item
              xs={12}
            >
              <AccountCircle style={{ fontSize: 100 }} />
            </Grid>
            <div className={classes.inputMargin}>
              <Grid container item spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Username" />
                </Grid>
              </Grid>
            </div>{" "}
            <div className={classes.inputMargin}>
              <Grid container item spacing={1} alignItems="flex-end">
                <Grid item>
                  <LocalPhone />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Phone Number" />
                </Grid>
              </Grid>
            </div>{" "}
            <div className={classes.inputMargin}>
              <Grid container item spacing={1} alignItems="flex-end">
                <Grid item>
                  <Lock />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Password" />
                </Grid>
              </Grid>
            </div>{" "}
            <div className={classes.inputMargin}>
              <Grid container item spacing={1} alignItems="flex-end">
                <Grid item>
                  <Lock />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Repeat Password"
                  />
                </Grid>
              </Grid>
            </div>
            {/* text-info */}
            <Grid item container justify="center" alignItems="center" xs={12}>
              <Grid item xs={8}>
                {" "}
                <Typography
                  className={classes.AccountText}
                  // gutterBottom
                  // variant="p"
                  // component="h4"
                >
                  Already have an Account ? <br />
                  <Link href="#" className={classes.link}>
                    Sign In
                  </Link>
                </Typography>
              </Grid>

              <Grid
                item
                container
                item
                justify="center"
                alignItems="center"
                item
                xs={12}
              >
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classes.margin}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
export default withStyles(styles)(SignUp);
