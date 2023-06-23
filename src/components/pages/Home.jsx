import React, { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../Exercises";
import SearchExercises from "../SearchExercises";
import HeroBanner from "../HeroBanner";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  // console.log(exercises);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
