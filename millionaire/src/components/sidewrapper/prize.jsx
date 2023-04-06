import classes from "./index.module.css"
import {useQuestion } from "../../providers/questionProvider"

export const Prize = (props) => {
    const context = useQuestion();
    return <div
        className={`${classes.scoreboardElement} ${props.num - 1 == context.id ? classes.selected : ""}`}
        >
        <div>{props.num}</div> $<div>{props.value}</div>
    </div>
}



