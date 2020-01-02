import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./CategoryStyle";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { AppBarContext } from "../../Context/AppBarContext";
import AppBar from "../../components/AppBar/AppBarII";
import pic1 from "../../images/lacenoback3collloor.jpg";
import pic1a from "../../images/minfied.jpeg";
import pic1b from "../../images/minified.jpg";
import pic2 from "../../images/final.jpg";
import pic3 from "../../images/minified (3).jpg";
import pic4 from "../../images/minified (4).jpg";
import pic7 from "../../images/minified (5).jpg";
import pic5 from "../../images/minified (2).jpg";
import pic8 from "../../images/minified (6).jpg";
import pic9 from "../../images/minified (7).jpg";
import pic10 from "../../images/minified (8).jpg";
import pic11 from "../../images/minified (10).jpg";
class Category extends Component {
  constructor(props) {
    super(props);
  }
  // method that gets data using the prop variable as an aguement
  static contextType = AppBarContext;

  getData = data => {
    if (data == "Lace") {
      return [
        // { name: "All Lace", pic: pic1 },
        { name: "Swiss Lace", pic: pic1a },
        { name: "Voile Lace", pic: pic5 },
        { name: "Lace", pic: pic1b }
      ];
    }
    return [
      // { name: "All Ankara", pic: pic1a },
      { name: "Chiganvy", pic: pic4 },
      { name: "Dominion", pic: pic7 },
      { name: "Holland Wax", pic: pic8 },
      { name: "Aunty K", pic: pic9 },
      { name: "Bimraj", pic: pic8 },
      { name: "Delight", pic: pic10 },
      { name: "Others", pic: pic11 }
    ];
  };

  render() {
    const { visible } = this.context;
    const { classes } = this.props;

    const categorys = this.getData(this.props.match.params.slug);
    console.log(categorys);
    return (
      <>
        {visible && <AppBar />}
        <Container maxWidth="sm" className={classes.defaultmagin}>
          {" "}
          <Grid
            container
            spacing={2}
            sm={12}
            md={12}
            className={classes.defaultmagin}
          >
            {/*  single */}
            <Grid item xs={12} md={6}>
              <Link to={`/products/categorys/${this.props.match.params.slug}`}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={pic1}
                    title="Contemplative Reptile"
                  />

                  <div style={styles.overlay2}>
                    <div style={styles.overlay}>
                      <Typography
                        className={classes.HeadingText}
                        variant="h6"
                        component="h5"
                      >
                        {"All Categories"}
                      </Typography>
                    </div>
                  </div>
                </Card>
              </Link>
            </Grid>
            {/*  end single */}
            {categorys.map((category, i) => (
              <Grid key={i} item xs={12} md={6}>
                <Link to={`/products/category/${category.name}`}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={category.pic}
                      title="Contemplative Reptile"
                    />

                    <div style={styles.overlay2}>
                      <div style={styles.overlay}>
                        <Typography
                          className={classes.HeadingText}
                          // gutterBottom
                          variant="h6"
                          component="h5"
                        >
                          {category.name}
                        </Typography>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    );
  }
}
export default withStyles(styles)(Category);
//import { AppBarContext } from "../../Context/AppBarContext";
//import AppBar from "../../components/AppBar/AppBarII";
//  static contextType = AppBarContext;
//const { visible } = this.context;
