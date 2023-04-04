import classes from "./index.module.css"
import { QuestionContext } from "../../providers/questionProvider"
import { useContext } from "react"
import { DIALOG, useDialog, DialogContext } from "../../providers/dialogProvider"

export const Answer = (props) => {
    const open = useContext(DialogContext).open;
    const context = useContext(QuestionContext)
    const handleClick = () => {
        open(DIALOG.SUBMIT_ANSWER, { onSubmit: () => { props.isAnswer ? context.nextQuestion() : console.log("krivi odgovor") } })
    }
    
    return <div
        className={classes.answer}
        onClick={() => handleClick()}
    >
        {props.text}
    </div>
}