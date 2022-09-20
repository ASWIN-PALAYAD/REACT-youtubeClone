import { Typography, Box, Stack } from '@mui/material';
import { useState,useEffect } from 'react';
import React from 'react';


import {Sidebar,Videos} from './' //used ./ because its already in components folder 
import { fetchFromAPI } from '../utils/fetchFromApi'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{
      setVideos(data.items)
    })
  }, [selectedCategory])
  

  return (
    <Stack sx={{ flexDirection:{sx:'column', md:'row'} }}>

      {/* sidebar section */}

      <Box sx={{ height: {sx:'auto', md:'92vh'}, borderRight:'1px solid #3d3d3d', px: {sx:0,md:2}, color:'white' }}>

        <Sidebar selectedCategory = {selectedCategory}  setSelectedCategory = {setSelectedCategory}/>

          <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'#fff' }}>
             Copyright 2002 aswin
          </Typography>

      </Box>

      {/* right side video section */}

      <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{color:'white'}} >
          {selectedCategory} <span style={{color:'#f31503'}}>videos</span>
        </Typography>

        <Videos videos={videos}/>

      </Box>





    </Stack>
  )
}

export default Feed