
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


 
      
      const useStyles = makeStyles((theme) => ({
    
        footer: {
          padding: theme.spacing(3, 2),
          margin: 0,
          bottom:0,
          position :"fixed",
          width :"100%",
          textAlign :"center",
          background: "#282c34",
         textDecorationColor : "#61dafb",
        },

        typography : {

            color : "#61dafb"
        }
      }));
      
      export default function Footer() {
        const classes = useStyles();
      
        return (
          
            <footer className={classes.footer}>
              <Container maxWidth="lg" >
                <Typography variant = "subtitle1" className = {classes.typography} >Fadel Sobh</Typography>
                <Typography variant = "subtitle2" className = {classes.typography} >2020 - 2021</Typography>
     
              </Container>
            </footer>
      
        );
      }

