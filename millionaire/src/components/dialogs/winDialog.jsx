import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
  
export const WinDialog = ({ isOpen, onClose, onSubmit}) => {
  const handleSubmit = () => {
    console.log(onSubmit)
    onSubmit(); 
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>You won... Do you want to restart game?</DialogTitle>
      <DialogActions>
        <Button onClick={handleSubmit}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};
