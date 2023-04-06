import {
    Dialog,
    DialogTitle,
  } from "@mui/material";
  
  export const CorrectDialog = ({ isOpen, onClose }) => {
    return (
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Correct answer.... next question will open soon</DialogTitle>
      </Dialog>
    );
  };
  