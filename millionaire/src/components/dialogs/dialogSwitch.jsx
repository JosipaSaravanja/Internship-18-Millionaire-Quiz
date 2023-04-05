import { HelpDialog } from "./help.jsx";
import { DialogContext, useDialog, DIALOG } from "../../providers/dialogProvider";
import { QuestionContext } from "../../providers/questionProvider";
import {ConfirmationDialog} from "./confirmationDialog";
import {RestartDialog} from "./restartDialog";
import {WinDialog} from "./winDialog";
import { useContext } from "react";

export const DialogSwitch = () => {
  const context = useContext(QuestionContext)
  const { activeDialog, restart, additionalProps, close } = useDialog();
  return (
    <>
      <ConfirmationDialog isOpen={activeDialog === DIALOG.SUBMIT_ANSWER_DIALOG} onClose={close} {...additionalProps} />
      <RestartDialog isOpen={restart === DIALOG.WRONG_ANSWER_DIALOG} onClose={close}/>
      <WinDialog isOpen={activeDialog===DIALOG.WON_DIALOG} onClose={close} {...additionalProps}/>
      <HelpDialog isOpen={activeDialog===DIALOG.HELP_DIALOG} onClose={close} {...additionalProps}/>
    </>
  );
};
