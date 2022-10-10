import  React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import AuthContext from '../authen/AuthContext';
import {useLocation, Link} from 'react-router-dom';
import Divider from "@mui/material/Divider";
import SkillsPaper from './SkillsPaper';
import { styled } from "@mui/material/styles";

const CardStyle = styled(Card)(() => ({
  
  boxShadow: "none",
  border: "1px solid black",
  width: "100%",
  maxWidth: "500px",
  minWidth: "270px",
  height: "100%",
  margin: "auto",
  
 

}));

export default function CardList({title, skills, id, description}) {

  let location = useLocation();

  return (
    
    <CardStyle ariant="outlined">
    <Card sx={{ minWidth: 275 }}>
      <CardContent >
        <Typography  color="red" variant="h5" gutterBottom >
        {title}
        </Typography>
        
        <Typography> 
       <Divider/>
        <SkillsPaper skills={skills}/>
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary"  lineHeight="30px">
        {description}
        </Typography>
      </CardContent>

      <CardActions display="flex">
        <Button
        variant="contained"
        component={Link}
        to={`/job/${id}`}
        state={{backgroundLocation: location}}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
    </CardStyle>
  );
}
