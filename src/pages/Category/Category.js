import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./CategoryStyle";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import pic1 from "../../images/lacenoback3collloor.png";
import pic1a from "../../images/final.png";
import pic2 from "../../images/minified (2).jpg";
import pic3 from "../../images/minified (3).jpg";
import pic4 from "../../images/minified (4).jpg";
import pic7 from "../../images/minified (5).jpg";
class Category extends Component {
  constructor(props) {
    super(props);
  }
  // method that gets data using the prop variable as an aguement

  getData = data => {
    if (data == "Lace") {
      return [
        { name: "All Catergories", pic: pic1 },
        { name: "Swiss Lace", pic: pic2 },
        { name: "Voile Lace", pic: pic3 },
        { name: "Lace", pic: pic4 }
      ];
    }
    return [
      { name: "All Catergories", pic: pic1a },
      { name: "Chiganvy", pic: pic2 },
      { name: "Dominion", pic: pic3 },
      { name: "Holland Wax", pic: pic4 },
      { name: "Aunty K", pic: pic7 },
      { name: "Bimraj", pic: pic3 },
      { name: "Delight", pic: pic2 },
      { name: "Others", pic: pic4 }
    ];
  };

  render() {
    const { classes } = this.props;
    const categorys = this.getData(this.props.match.params.slug);
    console.log(categorys);
    return (
      <>
        <Container maxWidth="sm" className={classes.defaultmagin}>
          {" "}
          <Grid
            container
            spacing={2}
            sm={12}
            md={12}
            className={classes.defaultmagin}
          >
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
