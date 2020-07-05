import React, {useState} from 'react'
import axios from 'axios';
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import People from '@material-ui/icons/People';
// core components
import CustomInput from './CustomInput/CustomInput';


function SearchComponent() {
    const [search,setSearch] =useState({
        query: '' ,
        results:{} ,
        loading: false ,
        message: ''

    })

    const cancel = ''

    const fetchSearchResults =(updatedPageNo='', query) =>{

            const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : ''

            //Page limit is 20
            const searchUrl = `
            https://api.themoviedb.org/3/search/movie?api_key=69da287f8d942bd5ac2693404c94e0da&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`




            if(cancel) {
                //Cancel the previous request before making a new one 
                cancel.cancel()  //axios cancel 
            } 
            //creates new cancel token
            cancel=axios.CancelToken.source()

            axios
            .get(searchUrl,{
                cancelToken:cancel.Token
            })
            .then((rest) => {
                const resultNotFoundMsg = !res.data.hits.length
				? 'There are no more search results. Please try a new search.'
                : '';
                setSearch({
                    results: res.data.hits,
                    message: resultNotFoundMsg,
                    loading: false,
                })
            })
            .catch((error) =>{
                if(axios.isCancel(error) || error) {
                    setSearch({
                        loading:false,
                        message:'Failed to fetch results. Please check network'
                    })
                }
            })
            
    }

   const  handleInputChange =(e) =>{
        const query = e.target.value;
        if(! query) {
            setSearch({ query, results:{}, message: ''})
        } else {
            setSearch({query,loading:true,message: ''} , () =>{
                fetchSearchResults(1,query)
            })
        }
    }

    return (
        <div>
            <CustomInput
    labelText="Search for a movie!"
    id="material"
    value=''
    onChange={handleInputChange}
    formControlProps={{
      fullWidth: true
    }}
    inputProps={{
      endAdornment: (<InputAdornment position="end"><People/></InputAdornment>)
    }}
  />
        </div>
    )
}

export default SearchComponent



