import classes from "./index.module.css"
import { useQuestion } from "../../providers/questionProvider"
import { useEffect, useState } from "react"
import { DIALOG, useDialog } from "../../providers/dialogProvider"

export const Answer = (props) => {
    const dialog = useDialog()
    const context = useQuestion()
    const [backgroundColor, setBackgroundColor] = useState("")
    useEffect(() => {
        if (dialog.activeDialog === null) {
            setBackgroundColor("")
        } else if (dialog.activeDialog === DIALOG.WRONG_ANSWER_DIALOG && props.isAnswer) {
            setBackgroundColor("green")
        }
    }, [dialog.activeDialog])

    useEffect(() => {
        console.log(context.hidden)
    }, [context.hidden])


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
        dialog.open(DIALOG.WRONG_ANSWER_DIALOG, {})
        setTimeout(() => {
            dialog.close()
            context.restart()
        }, 2000)
    }


    const handleClick = () => {
        setBackgroundColor("orange")
        dialog.open(DIALOG.SUBMIT_ANSWER_DIALOG, {
            onSubmit: () => props.isAnswer ? correct() : wrong()
        })
    }

    return <div
        backgroundColor={dialog.activeDialog === DIALOG.WRONG_ANSWER_DIALOG && props.isAnswer ? "green" : ""}
        className={`${classes.answer} ${context.hidden.some(el => el === props.id) ? classes.hide : ""}`}
        style={{ backgroundColor: backgroundColor }}
        onClick={() => context.hidden.some(el => el === props.id) ? "" : handleClick()}>
        {props.text}
    </div>
}