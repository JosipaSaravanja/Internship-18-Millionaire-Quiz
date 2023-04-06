import {
    Dialog,
    DialogTitle,
    DialogActions,
    Button,
  } from "@mui/material";
    
  export const ConfirmationDialog = ({ isOpen, onClose, onSubmit}) => {
    const handleSubmit = () => {
      onSubmit();
      
    };
  
    return (
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Is that your final answer?</DialogTitle>
        <DialogActions>
          <Button onClick={onClose}>No</Button>
          <Button onClick={handleSubmit}>Yes</Button>
        </DialogActions>
      </Dialog>
    );
  };
