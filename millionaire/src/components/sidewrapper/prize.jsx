import classes from "./index.module.css"
import {QuestionContext} from "../../providers/questionProvider"
import { useContext } from "react"

export const Prize =(props)=>{
    const context=useContext(QuestionContext);
    return <div className={props.num-1==context.id ? classes.scoreboardElement+" " +classes.selected: classes.scoreboardElement}>
        <div>{props.num}</div> $<div>{props.value}</div>
    </div>
}


