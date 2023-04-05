import classes from "./index.module.css"
import { QuestionContext } from "../../providers/questionProvider"
import { useContext, useEffect, useState } from "react"
import { DIALOG, useDialog, DialogContext } from "../../providers/dialogProvider"

export const Answer = (props) => {
    const dialog = useContext(DialogContext)
    const context = useContext(QuestionContext)
    const [backgroundColor, setBackgroundColor] = useState("")

    useEffect(()=>{
        if(dialog.restart===DIALOG.WRONG_ANSWER_DIALOG && props.isAnswer){
            setBackgroundColor("green")
        }else if(null){
            console.log("ajde")
            setBackgroundColor("")
        }
    }, [dialog.restart])

    const correct=()=>{
        setBackgroundColor("green")
        console.log("1")
        setTimeout(() => {
            setBackgroundColor("")
            context.id===14? dialog.open(DIALOG.WON_DIALOG, { onSubmit: ()=>context.restart()}): context.nextQuestion();
        }, 2000);
        
    }

    
    const wrong=()=>{
        setBackgroundColor("red")
        dialog.newDialog(DIALOG.WRONG_ANSWER_DIALOG)
        setTimeout(() => {
            setBackgroundColor("")
            dialog.newDialog(null)  
            context.restart(DIALOG.WRONG_ANSWER_DIALOG)
        }, 2000);
    }


    const handleClick = () => {
        setBackgroundColor("orange")
        dialog.open(DIALOG.SUBMIT_ANSWER_DIALOG, { onSubmit: ()=>props.isAnswer ? correct() : wrong()})
        if(dialog.activeDialog){
            setBackgroundColor("")
        }
    }

    return <div
    className={context.hidden.some(el=>el===props.id)? classes.hide: classes.answer} style={{backgroundColor: backgroundColor}}
        onClick={() => handleClick()}>
        {props.text}
    </div>
}