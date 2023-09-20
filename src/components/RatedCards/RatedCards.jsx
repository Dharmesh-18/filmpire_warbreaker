import React from "react";
import { Typography, Box, Divider, Chip } from "@mui/material";


import { Movie } from "..";
import useStyles from "./styles";

const RatedCards = ({ title, data }) => {
  const classes = useStyles();
  return (
    <Box>

      <Divider gutterBottom style={{ margin: '30px 0 20px 0'}}>
        <Chip label={title} variant="filled" color='primary' size='large' />
      </Divider>

      <Box display="flex" flexWrap="wrap" justifyContent='center' className={classes.container}>
        {data?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>

    </Box>
  );
};

export default RatedCards;
