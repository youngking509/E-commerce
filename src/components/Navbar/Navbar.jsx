import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom'

import logo from '../../assets/logo4.png'
import useStyles from './styles'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="50px" className={classes.image} />
                        Kwa'Litty Vibe
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar