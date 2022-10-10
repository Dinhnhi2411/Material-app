import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate, useParams } from "react-router-dom";
import api from "../data/fetchData";
import SkillsPaper from "./SkillsPaper";

function DetailListModal(){
    const {id} = useParams();
    const [job, setJob] = useState(null);

    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async () => {
            const data = await api.getJob(id);
            setJob(data);
        };
        fetchData();
    },[id]);
    
    const handleClose = ()=>{
        navigate(-1);
    };
    return (
        
        <Modal
          open={true}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Card
              sx={{
                border: "none",
                boxShadow: 0,
                backgroundColor: (theme) => theme.palette.primary.light,
                color: (theme) => theme.palette.common.white,
              }}
            >
              <CardContent>
                <Typography variant="h6" component="span">
                  {job?.title}
                </Typography>
                <SkillsPaper skills={job?.skills} />
                <Typography>{job?.description}</Typography>
                <Typography variant="h6" component="span">
                  City: {job?.city}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Modal>
    
      );
    }
    export default DetailListModal;