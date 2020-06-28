import React,{useState, useEffect} from 'react'
import CardHeader from './Card/CardHeader'
import CardBody from './Card/CardBody'
import Card from './Card/Card'
import color1 from '../images/color1.jpg'
import color2 from '../images/color2.jpg'
import styles from '../styles/jss/sectionCards'
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from './Grid/GridContainer'
import GridItem from './Grid/GridItem'
import axios from 'axios'



const useStyles = makeStyles(styles);

function MovieCards() {
    const classes = useStyles();
    const [movie,setMovie] = React.useState([])
    useEffect(() =>{
        axios.get(API)
        .then(res =>{
            setMovie(res.data.results)
        })
    },[])
    const API="https://api.themoviedb.org/3/movie/now_playing?api_key=69da287f8d942bd5ac2693404c94e0da&language=en-US&page=1"

    
    let test = movie.map(data =>{
        console.log(data)
        const backgroundcolor= `https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`

    return (
        <div>
          <GridContainer>
            <GridItem  sm={2} >
              <Card blog color="dark">
                <CardHeader image>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={`https://image.tmdb.org/t/p/w1280/${data.poster_path}`} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${backgroundcolor})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  
               
               
                  <h3>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      {data.title}
                    </a>
                    <h4 className={classes.cardCategory}>Release date:{data.release_date}</h4>
                  </h3>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
    )    })

    return(
        [test]
    )
}

export default MovieCards







/**
 * 
 */