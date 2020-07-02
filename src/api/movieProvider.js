import { context } from './Context'
import axios from 'axios'
import React, {useEffect} from 'react'


const MyProvider = ({children}) =>{
    const [movie,setMovie] = React.useState([])

    useEffect(() =>{
        axios.get(API)
        .then(res =>{
            setMovie(res.data.results)
        })
    },[])
    const API="https://api.themoviedb.org/3/movie/now_playing?api_key=69da287f8d942bd5ac2693404c94e0da&language=en-US&page=1"

   const { Provider } = context
   return(
       <Provider value={movie}>
           {children}
       </Provider>
   )
   }

   export default MyProvider