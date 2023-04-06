import classes from "./index.module.css"
import { QuestionContext } from "../../providers/questionProvider"
import { useContext, useEffect, useState } from "react"
import { DIALOG, useDialog, DialogContext } from "../../providers/dialogProvider"

export const Answer = (props) => {
    const dialog = useContext(DialogContext)
    const context = useContext(QuestionContext)
    const [backgroundColor, setBackgroundColor] = useState("")
    useEffect(() => {
        console.log()
        if (dialog.activeDialog === null) {
            setBackgroundColor("")
        } else if(dialog.activeDialog===DIALOG.WRONG_ANSWER_DIALOG && props.isAnswer){
            setBackgroundColor("green")

        }
    }, [dialog.activeDialog])

    const correct = () => {
        setBackgroundColor("green")
        dialog.open(DIALOG.CORRECT_ANSWER_DIALOG, {})
        setTimeout(() => {
            dialog.close()
            context.id === 14 ? dialog.open(DIALOG.WON_DIALOG, { onSubmit: () => context.restart() }) : context.nextQuestion();
        },
            2000);
    }

    const wrong = () => {
        setBackgroundColor("red")
        console.log("provmjena")
        dialog.open(DIALOG.WRONG_ANSWER_DIALOG, {})        
        setTimeout(() => {
            dialog.close()
            context.restart()
        }, 2000)
    }


    const handleClick = () => {
        setBackgroundColor("orange")
        console.log(dialog.activeDialog)
        dialog.open(DIALOG.SUBMIT_ANSWER_DIALOG, {
            onSubmit: () => props.isAnswer ? correct() : wrong()
        })  
    }

    return <div
        backgroundColor={dialog.activeDialog === DIALOG.WRONG_ANSWER_DIALOG && props.isAnswer ? "green" : ""}
        className={`${classes.answer} ${context.hidden.some(el => el === props.id) ? classes.hide : ""}`} 
        style={{ backgroundColor: backgroundColor }}
        onClick={() => context.hidden.some(el => el === props.id)? "" : handleClick()}>
        {props.text}
    </div>
}