import { createContext, useContext, useState } from "react";

export const DIALOG = {
  SUBMIT_ANSWER_DIALOG: "SUBMIT_ANSWER",
  WRONG_ANSWER_DIALOG: "RESTART_DIALOG",
  WON_DIALOG: "WON_DIALOG"
};

const defaultContext = {
  activeDialog: null,
  restart: null,
  open: () => {},
  close: () => {},
  newDialog: ()=>{},
  additionalProps: {},
};

export const DialogContext = createContext(defaultContext);

export const DialogProvider = ({ children }) => {
  const [activeDialog, setActiveDialog] = useState(defaultContext.activeDialog);
  const [restart, setRestart] = useState(defaultContext.restart);
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

  const newDialog = (dialog,  additionalProps = {}) => {
    setRestart(dialog);
    setAdditionalProps(additionalProps);
  };

  return (
    <DialogContext.Provider
      value={{ activeDialog, restart, open, close, newDialog, additionalProps}}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);

