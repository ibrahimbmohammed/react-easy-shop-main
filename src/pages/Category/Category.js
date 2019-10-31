import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./CategoryStyle";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import pic1 from "../../images/lacenoback3collloor.png";
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
      "All Catergories",
      "Chiganvy",
      "Dominion",
      "Holland Wax",
      "Aunty K",
      "Bimraj",
      "Delight",
      "Others"
    ];
  };

  render() {
    const { classes } = this.props;
    const categorys = this.getData(this.props.match.params.slug);
    console.log(categorys);
    return (
      <>
        <Container className={classes.defaultmagin}>
          {" "}
          <Grid container spacing={3}>
            {categorys.map((category, i) => (
              <Grid key={i} item xs={12}>
                <Link to={`/products/category/${category.name}`}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={category.pic}
                      title="Contemplative Reptile"
                    />
                    {category.name}
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
