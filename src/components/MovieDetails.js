import React, {useContext}from 'react'
import color1 from '../images/color1.jpg'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// core components
import Card from "./Card/Card.js";
import CardBody from "./Card/CardBody.js";
import CardHeader from "./Card/CardHeader.js";
import CardFooter from "./Card/CardFooter.js";
import Button from "./CustomButtons/Button.js";
import {MyContext} from "./MovieCards"

import { cardTitle } from "../styles/jss/material-kit-pro-react";
import {context} from '../api/Context'

const style = {
    cardTitle,
    textCenter: {
      textAlign: "center",
      zindex: "100",
    position: "absolute !important",
    bottom: "180px",
    background:"rgba(0,0,0,0.8)",
    color:"white",
    width:"50rem",
    height:"30rem",
    left:"2rem",
    
    
    },
    textMuted: {
      color: "#6c757d"
    }
  };

  const useStyles = makeStyles(style);


function MovieDetails() {
    const classes = useStyles();

    //console.log({MyContext})

    const URL="https://image.tmdb.org/t/p/original/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg"

    const data= useContext(context);
    //console.log(data)

    let test = data.map (movie =>{
      console.log(movie.title)
    })

     

    return (
    
        <div className="moveDetailContainer">
            <img className="backgroundimg" src={URL} alt=""/>
            <Card  className={classes.textCenter}  >
      <CardHeader color="info" className="movieCardHeader">Sonic The Hedgehog</CardHeader>
      <CardBody  className="movieDetailsBody">
        <h4>yup</h4>
        <p>
        Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.
        </p>
        <Button color="info" ><PlayArrowIcon/>Play Trailer</Button>
      </CardBody>
    
      <CardFooter>
     
      </CardFooter>
   
    </Card>
        </div>
       
    )
}

export default MovieDetails


/**
 * import React from "react";




const useStyles = makeStyles(style);

export default function CardExampleFeatured() {
  const classes = useStyles();
  return (
    <Card className={classes.textCenter}>
      <CardHeader color="danger">Featured</CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>Special title treatment</h4>
        <p>
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Button color="primary">Do something</Button>
      </CardBody>
      <CardFooter className={classes.textMuted}>2 days ago</CardFooter>
    </Card>
  );
}
 */