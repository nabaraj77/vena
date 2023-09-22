import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const papers = [
  {
    title: "Treatment Effects On Hematological Parameters",
    url: "./Images/logo.png",
    des: "Anaplasmosis is a vector-borne, infectious blood disease of cattle   caused by the rickettsial parasites, Anaplasma marginale and Anaplasma centrale.",
  },
];

const Papers = () => {
  return (
    <Box>
      <Typography variant="h4" textAlign={"center"} m={"2rem"}>
        Paper Published
      </Typography>
      {papers.map((data, key) => {
        return (
          <Card sx={{ maxWidth: 345, margin: "1rem 1rem" }} key={key}>
            <CardMedia
              sx={{ height: 140 }}
              image={data.url}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.des}
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button> */}
              <Button
                size="small"
                href="https://www.researchgate.net/publication/343537437_TREATMENT_EFFECTS_ON_HEMATOLOGICAL_PARAMETERS_AND_SERUM_BIOCHEMICAL_PROFILE_OF_LULU_CATTLE_INFECTED_WITH_BOVINE_ANAPLASMOSIS?fbclid=IwAR3NlSFtRy4D_vjy2RqMt5ZUVPnTWUqBlDA1fKQ8fX03NzjaEDu1RZAOCXY"
                target="_blank"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};

export default Papers;
