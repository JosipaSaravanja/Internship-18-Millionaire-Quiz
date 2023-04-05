import {
    Dialog,
    DialogTitle,
    DialogActions,
    Button,
  } from "@mui/material";
    
  export const HelpDialog = ({ isOpen, onClose, additionalInfo}) => {
    return (
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>{additionalInfo}</DialogTitle>
        <DialogActions>
          <Button onClick={onClose}>OK</Button>
        </DialogActions>
      </Dialog>
    );
  };
