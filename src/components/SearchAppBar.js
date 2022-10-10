import React,{ useContext } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import AuthContext from '../authen/AuthContext';
import { useSearchParams, useNavigate} from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgb(86,179,127)",
  '&:hover': {
    backgroundColor:"rgb(116,242,172)" ,
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
 
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
    const auth = useContext(AuthContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q");
    const navigate = useNavigate();

//  Login
    const handleClickLogin = (e)=>{
      navigate("/login");
    };

// logout
    const handleClickLogout = (e)=>{
      auth.signout(()=>{
        navigate("/");
      });
    };

    const handleSubmit =(e)=>{
      e.preventDefault();
      let formData = new FormData(e.currentTarget);
      let q = formData.get("q");
      setSearchParams({q: q});
    };

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="span"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            JOB ROUTING
          </Typography>
         <Box component="form" onSubmit={handleSubmit}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              name="q"
              defaultValue={q ?? undefined}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}

            />
        
          </Search>
          </Box>
          <Box sx={{flexGrow: 1}}/>
          {auth?.user ?(
            <>
           
          <Button color="inherit" margin="10px"
          onClick={handleClickLogout}
          startIcon={<LogoutIcon/>}
          >
            Logout
          </Button>
          </>

          ):(
          <Button
          onClick={handleClickLogin}
          startIcon={<LoginIcon />}
          variant="contained"
          >
            Login
          </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
