import React from 'react'
import CardHeader from './Card/CardHeader'
import CardBody from './Card/CardBody'
import Card from './Card/Card'
import color1 from '../images/color1.jpg'
import color2 from '../images/color2.jpg'
import styles from '../styles/jss/sectionCards'
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from './Grid/GridContainer'
import GridItem from './Grid/GridItem'



const useStyles = makeStyles(styles);

function MovieCards() {
    const classes = useStyles();
    return (
        <div>
          <GridContainer>
            <GridItem  sm={3} >
              <Card blog color="dark">
                <CardHeader image>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={color2} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${color2})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  
                    <h5 className={classes.cardCategory}>Action, Adventure</h5>
               
                  <h3>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Move title goes here
                    </a>
                  </h3>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
    )
}

export default MovieCards
