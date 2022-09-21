import { Typography, Box} from '@mui/material';
import { useState,useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';


import {Videos} from './' //used ./ because its already in components folder 
import { fetchFromAPI } from '../utils/fetchFromApi'

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>{
      setVideos(data.items)
    })
  }, [searchTerm])
  

  return (
    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{color:'white'}} >
          Search Result for : <span style={{color:'#f31503'}}>{searchTerm}</span>videos
        </Typography>

        <Videos videos={videos}/>

      </Box>  )
}

export default SearchFeed