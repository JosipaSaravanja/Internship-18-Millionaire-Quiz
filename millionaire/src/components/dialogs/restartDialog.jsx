import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";

export const RestartDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Wrong answer... game will restart soon</DialogTitle>
    </Dialog>
  );
};
