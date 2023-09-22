import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Box, Button, Typography } from "@mui/material";
let articlesLinks = [
  {
    url: "http://newsdoko.com/scenario-of-covid-19-challenges-and-opportunities-for-youths-in-context-of-nepal/?fbclid=IwAR21byKQlcCXyJzYqhwv1UF7lzBXycl8lncDnUkVs_OMlKZ56zfeWXMp4go",
    name: "Article 1",
  },
  {
    name: "Article 2",
    url: "https://hernekatha.com/ramkrishna/?fbclid=IwAR2ZeBRw-e6hD9LlRVdRrD0w_QZzjPsU7vAIfsfWSi5j6o9WRUrx8TbxnjQ",
  },
  {
    name: "Article 3",
    url: "https://pyuthankhabar.wordpress.com/2017/05/23/%E0%A4%AF%E0%A5%81%E0%A4%B5%E0%A4%BE_%E0%A4%B0_%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A4%A8%E0%A5%80%E0%A4%A4%E0%A4%BF-%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%95%E0%A5%83%E0%A4%B7%E0%A5%8D%E0%A4%A3-%E0%A4%AA/?fbclid=IwAR0gnKYNrfOaAM0giUARyMmmtJMWII4tGno5BDt483FGnOQzy9ju-F1AkVo",
  },
  {
    name: "Article 4",
    url: "http://khabarsansar.com/2023/05/23/27129/?fbclid=IwAR2mp12ej9lntt_g2YDUPZQ10vPxVFMOqvCtoi9pbX7tjE1bIAM4YJ8rtyM",
  },
  {
    name: "Article 5",
    url: "https://www.researchgate.net/publication/343537437_TREATMENT_EFFECTS_ON_HEMATOLOGICAL_PARAMETERS_AND_SERUM_BIOCHEMICAL_PROFILE_OF_LULU_CATTLE_INFECTED_WITH_BOVINE_ANAPLASMOSIS?fbclid=IwAR3NlSFtRy4D_vjy2RqMt5ZUVPnTWUqBlDA1fKQ8fX03NzjaEDu1RZAOCXY",
  },
];

const Articles = () => {
  return (
    <Box>
      <Typography variant="h4" textAlign={"center"} m={"2rem"}>
        Articles Published
      </Typography>
      {articlesLinks.map((data, key) => {
        return (
          <Box
            display={"flex"}
            alignItems={"center"}
            size="large"
            key={key}
            sx={{ margin: "1rem 1rem" }}
          >
            <ArrowCircleRightIcon />
            <Button href={data.url} target="_blank">
              {data.name}
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default Articles;
