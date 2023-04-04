import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
  
export const WinDialog = ({ isOpen, onClose}) => {
  const handleSubmit = () => {
    /* onSubmit(); */
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
