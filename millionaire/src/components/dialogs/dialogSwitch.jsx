import { HelpDialog } from "./help.jsx";
import { useDialog, DIALOG } from "../../providers/dialogProvider";
import { ConfirmationDialog } from "./confirmationDialog";
import { RestartDialog } from "./restartDialog";
import { CorrectDialog } from "./correctDialog.jsx";
import { WinDialog } from "./winDialog";

export const DialogSwitch = () => {
  const { activeDialog, additionalProps, close } = useDialog();
  return (
    <>
      <ConfirmationDialog isOpen={activeDialog === DIALOG.SUBMIT_ANSWER_DIALOG} onClose={close} {...additionalProps} />
      <RestartDialog isOpen={activeDialog === DIALOG.WRONG_ANSWER_DIALOG} onClose={close} />
      <CorrectDialog isOpen={activeDialog === DIALOG.CORRECT_ANSWER_DIALOG} onClose={close} />
      <WinDialog isOpen={activeDialog === DIALOG.WON_DIALOG} onClose={close} {...additionalProps} />
      <HelpDialog isOpen={activeDialog === DIALOG.HELP_DIALOG} onClose={close} {...additionalProps} />
    </>
  );
};
