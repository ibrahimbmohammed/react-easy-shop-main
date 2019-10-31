import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./CategoryStyle";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
class Category extends Component {
  constructor(props) {
    super(props);
  }
  // method that gets data using the prop variable as an aguement

  getData = data => {
    if (data == "Lace") {
      return ["All Catergories", "Swiss Lace", "Voile Lace", "Lace"];
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
        <Container>
          {" "}
          <Grid container spacing={3}>
            {categorys.map((category, i) => (
              <Grid key={i} item xs={12}>
                <Link to={`/products/category/${category}`}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                    />
                    {category}
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
