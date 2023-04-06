import {
    Dialog,
    DialogTitle,
    DialogActions,
    Button,
  } from "@mui/material";
  
  export const CorrectDialog = ({ isOpen, onClose }) => {
    const close=()=>{
      
    }
    return (
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Correct answer.... next question will open soon</DialogTitle>
      </Dialog>
    );
  };
  