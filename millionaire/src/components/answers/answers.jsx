import classes from "./index.module.css"
import {Answer} from "./answer"

export const Answers=()=>{
    return <div className={classes.answers}>
        <Answer></Answer>
        <Answer></Answer>
        <Answer></Answer>
        <Answer></Answer>
    </div>
}