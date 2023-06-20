import React from "react";
import { Box } from "@mui/material";
import Exercises from "../Exercises";
import SearchExercises from "../SearchExercises";
import HeroBanner from "../HeroBanner";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
