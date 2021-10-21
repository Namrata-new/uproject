import React from "react";
import Card from "./Card";
import classes from './ErrorModal.Module.css';
import {Button} from '@material-ui/core';

const ErrorModal =(props)=>{
  const buttonStyle={margin:'8px 0',align:'right',height:'4ch',width:'12ch',background:'skyblue',color:'white'}
  return(
    <div>
    <div className={classes.backdrop} onClick={props.onConfirm}/>
    <Card className={classes.modal}>
      <header className={classes.header}>
          <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
          <p>{props.message}</p>
      </div>
      <div align='center'>
       <Button  style={buttonStyle} variant="contained"  onClick={props.onConfirm} size="large">
          <b>Ok</b>
        </Button>
      </div>
      <footer className={classes.actions}>
       
         
      </footer>
  </Card>;
  </div>);
};
export default ErrorModal;