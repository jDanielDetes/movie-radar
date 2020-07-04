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
import Button from './CustomButtons/Button';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import history from '../api/history'



 const useStyles = makeStyles(styles);
 
function MovieCards() {
    
    const classes = useStyles();
    const [movie,setMovie] = React.useState([])
    const [category,setCategory] =React.useState('now_playing')

    

   
    useEffect(() =>{
        axios.get(API)
        .then(res =>{
            setMovie(res.data.results)
        })
    },[])
    const API=`https://api.themoviedb.org/3/movie/${category}?api_key=69da287f8d942bd5ac2693404c94e0da&language=en-US&page=1`

 

     var changeCategory = (TAG)=>{
       setCategory(TAG)
       
       axios.get(API)
       .then(res =>{
           setMovie(res.data.results)
       })
       console.log(movie)
     }
    


    let test = movie.map(data =>{
       
        const backgroundcolor= `https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`


    return (
        <div   >
            <GridItem  >
              <Card blog color="dark"className="cards" >
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
                  
                    
               
                  <h3 className="movieButton">
                    <a color="info">
                      {data.title}
                    </a>
                    <Button  color="info" round onClick={e => history.push(`/MovieDetails/${data.id}`)}><LocalMoviesIcon /> Watch Trailer </Button>
                  </h3>
                </CardBody>
              </Card>
            </GridItem>
      
        </div>
    )    })

    return(
       <div className="movieContainer">
              <button onClick ={() =>changeCategory('popular')}>yehb</button>
            {[test]}
       </div>
     
    )
}

export default MovieCards







/**
 * 
 */