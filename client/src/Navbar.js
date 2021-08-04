import React,{useState} from 'react'
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import './css/Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import {Menu,MenuItem} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {IconButton} from '@material-ui/core'

function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className="navbar">
            <div className="navbar__left">
            <PinterestIcon fontSize='large' />
             <div className="nav__text">
                myStore.js
             </div>
            </div>
            <div className="navbar__right">
                <div className="nav__searchBar">
                    <input type="text" placeholder="Search something here..." />
                    <IconButton>
                    <SearchIcon />
                    </IconButton>
                </div> 
                <div className="nav__manu">
                    <IconButton>
                   <MenuIcon  onClick={handleClick}/>
                   </IconButton>
                 
                </div>

            </div>
            <Menu
                       id="simple-menu"
                     anchorEl={anchorEl}
                     keepMounted
                     open={Boolean(anchorEl)}
                      onClose={handleClose}
                     style={{marginTop:'60px'}}
                   >
                     
                     <IconButton style={{background:'rgb(178, 226, 226)',width:'150px',margin:'2px',boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}><MenuItem ><HomeIcon/>&nbsp;&nbsp;Home</MenuItem></IconButton>
                     <IconButton style={{background:'rgb(178, 226, 226)',width:'150px',margin:'2px',boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}><MenuItem > <ShoppingCartIcon />&nbsp;&nbsp;Cart</MenuItem></IconButton>
                     <IconButton style={{background:'rgb(178, 226, 226)',width:'150px',margin:'2px',boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}><MenuItem> <ShoppingCartIcon />&nbsp;&nbsp;Cart</MenuItem></IconButton>
                     <IconButton style={{background:'rgb(178, 226, 226)',width:'150px',margin:'2px',boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}><MenuItem ><AccountBoxIcon />&nbsp;&nbsp; Login</MenuItem></IconButton>
                     <IconButton ><MenuItem onClick={handleClose} ><CloseIcon /></MenuItem></IconButton>
                   

                   </Menu>
        </div>
    )
}

export default Navbar
