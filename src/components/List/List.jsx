import React, { useState } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import PlaceDetails from '../PlaceDetails/PlaceDetails.jsx';

import useStyles from './styles.js';

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("restaurants")
  const [rating, setRating] = useState("")

  const places = [
    {name: "cool place"},
    {name: "cool Bear"},
    {name: "cool school"},
    {name: "cool place"},
    {name: "cool Beer"},
    {name: "cool public"},
    {name: "cool place"},
  ]

  return (
    <div className={classes.container}>
      <Typography variant='h4'>Restaurants, Hotels & Attractions around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e)=>setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">hotels</MenuItem>
          <MenuItem value="attractions">attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>ratings</InputLabel>
        <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, idx) => (
          <Grid item key={idx} xs={12}>
              <PlaceDetails places={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List