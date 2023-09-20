import React from "react";
import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const randomMovieImage = 'https://th.bing.com/th?id=OIP.2xl8SiQTS8bMRzSJ6PpTrAHaJA&w=226&h=275&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2';

const Movie = ({ movie, i }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 90}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          <img
            alt={movie.title}
            className={classes.image}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : randomMovieImage
            }
          />
          <Typography className={classes.title} variant="h6">
            {" "}{movie.title}{" "}
          </Typography>

          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
