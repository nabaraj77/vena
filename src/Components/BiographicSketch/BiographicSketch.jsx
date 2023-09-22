import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const BiographicSketch = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
        mt="4rem"
        mb={"4rem"}
      >
        <Grid xs={11} lg={3} md={11} mr="1rem" mb={"1rem"}>
          <Item>
            <img
              src="./Images/biographic.png"
              alt="Biographic Image"
              width="250px"
            />
          </Item>
        </Grid>
        <Grid xs={11} lg={8} md={11}>
          <Item>
            <Typography variant="body1" textAlign="justify" p={1}>
              Dr. Ramkrishna Poudel was born on November 14, 1992 as son of Mr.
              Liladhar Poudel and Mrs. Gunja Kumari Poudel in Jhimruk Rural
              Municipality, Pyuthan, Lumbini, Province, Nepal.
              <br />
              <br />
              He took his secondary education from Shree Balshikshya Higher
              Secondary School (SLC), Pyuthan and Oxford Higher Secondary School
              (Intermediate) from Butwal, Rupendehhi . After that he joined
              B.V.Sc. and A.H. program under Institute of Agriculture and Animal
              Science(IAAS). He was graduated in 2018 with distinction. He
              completed master degree in Veterinary Pharmacology(MVSC
              Pharmacology) from Agriculture and Forestry University(AFU),Rampur
              Chitwan in 2023 with distinction.
              <br />
              <br /> He is currently working as governmental veterinary officer
              at Pauwadungma Rural Municipality, Bhojpur, Nepal. He is also
              involved in providing technical service to several commercial
              animal farm in Bhojpur area. He has received number of trainings
              related to field and attended various conferences, seminar and
              workshops. Dr.Poudel is a member of a number of professional and
              volunteer organizations including the Nepal Veterinary
              Association, Rotaract Club of Butwal etc. He has published
              research paper of B.V.Sc. & A. H. internship in Bhutan Journal of
              Animal Science on title “Treatment effects on Hematological
              Parameters and Serum Biochemical Profile of Lulu Cattle Infected
              with Bovine Anaplasmosis” and many articles in several national
              journals, bulletins and newspapers.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BiographicSketch;
