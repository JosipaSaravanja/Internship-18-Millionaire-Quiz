import { createContext, useContext, useState } from "react";

export const DIALOG = {
  SUBMIT_ANSWER: "SUBMIT_ANSWER",
  DELETE_TASK_DIALOG: "DELETE_TASK_DIALOG",
};

const defaultContext = {
  activeDialog: null,
  open: () => {},
  close: () => {},
  additionalProps: {},
};

export const DialogContext = createContext(defaultContext);

export const DialogProvider = ({ children }) => {
  const [activeDialog, setActiveDialog] = useState(defaultContext.activeDialog);
  const [additionalProps, setAdditionalProps] = useState(
    defaultContext.additionalProps
  );

  const open = (dialog, additionalProps = {}) => {
    setActiveDialog(dialog);
    setAdditionalProps(additionalProps);
  };

  const close = () => {
    setActiveDialog(null);
    setAdditionalProps({});
  };

  return (
    <DialogContext.Provider
      value={{ activeDialog, open, close, additionalProps}}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);

