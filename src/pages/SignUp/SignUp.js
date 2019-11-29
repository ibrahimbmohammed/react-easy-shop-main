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
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { AppBarContext } from "../../Context/AppBarContext";
import AppBar from "../../components/AppBar/AppBarII";
import Mail from "@material-ui/icons/Mail";
import { Formik, Field, Form } from "formik";
import CircularProgress from "@material-ui/core/CircularProgress";
import Axios from "axios";
import toast from "toasted-notes";
import "toasted-notes/src/styles.css";
//;;
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      item: "",
      isLoading: false,
      error: false
    };
  }
  static contextType = AppBarContext;
  render() {
    const { classes } = this.props;
    const { visible } = this.context;
    return (
      <>
        {visible && <AppBar />}
        <Container maxWidth="xs" className={classes.defaultmagin}>
          <Formik
            initialValues={{ handle: "" }}
            onSubmit={(data, { setSubmitting }) => {
              this.setState({
                isLoading: true
              });
              setSubmitting(true);
              //make  asycn call

              Axios.post(
                ` https://europe-west1-easy-shop-53cc2.cloudfunctions.net/api/signUp
                `,
                data
              )
                .then(doc => {
                  localStorage.setItem("FBIdtoken", `Bearer ${doc.data.token}`);
                  this.setState({
                    isLoading: false,
                    item: doc.data
                  });
                  this.props.history.push("/");
                  console.log(this.state.item);
                  toast.notify("signed in as", {
                    position: "top",
                    color: "blue",
                    duration: 2000
                  });
                })
                .catch(err => {
                  console.error(err);

                  this.setState({
                    error: true,
                    isLoading: false
                  });
                  toast.notify("Oops! something went wrong,please try again", {
                    position: "top",
                    color: "blue",
                    duration: 2000
                  });
                });

              console.log(data);
              setSubmitting(false);
            }}
          >
            {({
              value,
              isSubmitting,
              handleChange,
              handleSubmit,
              handleBlur
            }) => (
              <Form>
                <Grid
                  container
                  item
                  justify="center"
                  alignItems="center"
                  xs={12}
                >
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
                        <Field
                          name="handle"
                          label="Username"
                          type="input"
                          required
                          as={TextField}
                        ></Field>
                      </Grid>
                    </Grid>
                  </div>{" "}
                  <div className={classes.inputMargin}>
                    <Grid container item spacing={1} alignItems="flex-end">
                      <Grid item>
                        <Mail />
                      </Grid>
                      <Grid item>
                        <Field
                          name="email"
                          label="Email"
                          type="input"
                          required
                          as={TextField}
                        ></Field>
                      </Grid>
                    </Grid>
                  </div>{" "}
                  {/* <div className={classes.inputMargin}>
                    <Grid container item spacing={1} alignItems="flex-end">
                      <Grid item>
                        <LocalPhone />
                      </Grid>
                      <Grid item>
                        <Field
                          name="phone"
                          label="Phone"
                          type="input"
                          required
                          as={TextField}
                        ></Field>
                      </Grid>
                    </Grid>
                  </div>{" "} */}
                  <div className={classes.inputMargin}>
                    <Grid container item spacing={1} alignItems="flex-end">
                      <Grid item>
                        <Lock />
                      </Grid>
                      <Grid item>
                        {/* <TextField
                          id="input-with-icon-grid"
                          label="Email"
                        /> */}
                        <Field
                          label="Password"
                          name="password"
                          type="password"
                          required
                          as={TextField}
                        ></Field>
                      </Grid>
                    </Grid>
                  </div>{" "}
                  <div className={classes.inputMargin}>
                    <Grid container item spacing={1} alignItems="flex-end">
                      <Grid item>
                        <Lock />
                      </Grid>
                      <Grid item>
                        {/* <TextField id="input-with-icon-grid" label="Password" /> */}
                        <Field
                          label=" Confirm Password"
                          name="confirm password"
                          type="password"
                          required
                          helperText={this.state.error}
                          error={this.state.error}
                          as={TextField}
                        ></Field>
                      </Grid>
                    </Grid>
                  </div>{" "}
                  {/* text-info */}
                  <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <Grid item xs={8}>
                      {" "}
                      <Typography
                        className={classes.AccountText}
                        // gutterBottom
                        // variant="p"
                        // component="h4"
                      >
                        Already have an Account? <br />
                        <Link to="/signIn" className={classes.link}>
                          Sign In
                        </Link>
                        ,its free
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
                      {this.state.isLoading ? (
                        <CircularProgress className={classes.progress} />
                      ) : (
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          color="primary"
                          className={classes.margin}
                        >
                          Sign Up
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <pre>{JSON.stringify(value, null, 2)}</pre>
                {/* <Button type="submit">submit</Button> */}
              </Form>
            )}
          </Formik>
        </Container>
      </>
    );
  }
}
export default withStyles(styles)(SignUp);

{
  /* <Formik
initialValues={{ username: "user" }}
onSubmit={(data, { setSubmitting }) => {
  setSubmitting(true);
  //make  asycn call
  console.log(data);
  setSubmitting(false);
}}
>
{({
  value,
  isSubmitting,
  handleChange,
  handleSubmit,
  handleBlur
}) => (
  <Form onSubmit={handleSubmit}>
    <Field name="username" type="input" as={TextField}></Field>
    <TextField
      name="username"
      value={value.username}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <Button type="submit">submit</Button>
    <pre>{JSON.stringify(value, null, 2)}</pre>
  </Form>
)}
</Formik> */
}
