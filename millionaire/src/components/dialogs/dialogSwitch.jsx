import { DialogContext, useDialog, DIALOG } from "../../providers/dialogProvider";
import {ConfirmationDialog} from "./confirmationDialog";
import { useContext } from "react";

export const DialogSwitch = () => {
  const { activeDialog, additionalProps, close } = useDialog();
  return (
    <>
      <ConfirmationDialog
        isOpen={activeDialog === DIALOG.SUBMIT_ANSWER}
        onClose={close}
        {...additionalProps}
      />/
    </>
  );
};
