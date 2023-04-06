import { createContext, useContext, useState } from "react";

export const DIALOG = {
  SUBMIT_ANSWER_DIALOG: "SUBMIT_ANSWER",
  WRONG_ANSWER_DIALOG: "WRONG_ANSWER_DIALOG",
  CORRECT_ANSWER_DIALOG: "CORRECT_ANSWER_DIALOG",
  HELP_DIALOG: "HELP_DIALOG",
  WON_DIALOG: "WON_DIALOG"
};

const defaultContext = {
  activeDialog: null,
  open: () => { },
  close: () => { },
  newDialog: () => { },
  additionalProps: {},
};

export const DialogContext = createContext(defaultContext);

export const DialogProvider = ({ children }) => {
  const [activeDialog, setActiveDialog] = useState(defaultContext.activeDialog);
  const [additionalProps, setAdditionalProps] = useState(
    defaultContext.additionalProps
  );

  const open = (dialog, additionalPropse = {}) => {
    setActiveDialog(dialog);
    setAdditionalProps(additionalPropse);
  };

  const close = () => {
    setActiveDialog(null);
    setAdditionalProps({});
  };

  const newDialog = (dialog, additionalProps = {}) => {
    setActiveDialog(dialog);
    setAdditionalProps(additionalProps);
  };

  return (
    <DialogContext.Provider
      value={{ activeDialog, open, close, newDialog, additionalProps }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);

