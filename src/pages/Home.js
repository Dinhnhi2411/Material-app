import React,{useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import api from '../data/fetchData';
import CardList from '../components/CardList';
import { useSearchParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";

const PaginationJob = styled(Pagination)(()=>({
  ul: {
    justifyContent: "center",
  },
}));

function Home() {
  const [jobs, setJobs] = useState([]);
  const [pageTotal, setPageTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  useEffect(()=>{
    const fetch = async ()=> {
      const data = await api.getJobs(page, q); 
      // console.log("datajobs",data)
      setJobs(data.jobs);
      setPageTotal(data.pageTotal);
    };
    fetch();
  },[page, q]);
 
  return (
    <Container>
      {jobs.length > 0 ? (
        <>
    <Grid container spacing={2} mt={2}>
    {jobs.map((job) =>(
      <Grid key={job.id} item xs={12} md={4} lg={3}>
      <CardList
      id = {job.id}
      title={job.title}
      description={job.description}
      skills={job.skills}
      />
      </Grid>
    ))}
    </Grid>
    <PaginationJob
    sx={{ marginTop:"15px"}}
    count={pageTotal}
    color="primary"
   
    onChange={(e, value)=>{
      setPage(value)
      
    }}
    />
    </>
    ):(
    <Typography variant="subtitle1" sx={{textAlign: "center"}}>
      No Result For Search
    </Typography>
      )}
  </Container>
  );
}

export default Home;
