import classes from "./index.module.css"

export const Answer=(props)=>{
    return <div className={classes.answer}>{props.text}</div>
}