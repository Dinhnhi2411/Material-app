import React, { useEffect, useState } from "react";
import RequireAuth from "../authen/RequireAuth";
import api from "../data/fetchData";
import { useParams } from "react-router-dom";

function JobDetail() {
  const [job, setJob] = useState();
  let { id } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const data = await api.getJob(id);
      setJob(data);
    };
    fetch();
  }, [id]);
  return (
  <>
    <RequireAuth callback={()=> {}}>
    <main style={{padding: "1rem"}}>
    <h2> Job: {job?.title} </h2>
    <p> Skills: {job?.skills} </p>
    <p> Description: {job?.description} </p>
    <p> City: {job?.city} </p>
  </main>
      
    </RequireAuth>
  </>
  );

}

export default JobDetail;