import {Question} from "../components/question/question"
import {Title} from "../components/title/title"
import {SideWrapper} from "../components/sidewrapper/sidewrapper"
import {Answers} from "../components/answers/answers"
import classes from "./index.module.css"
import {DialogSwitch} from "../components/dialogs/dialogSwitch"

export const MainPage =()=>{
  return (
    <div className={classes.mainPage}>
      <Title/>
      <Question/>
      <SideWrapper/>
      <Answers/>
      <DialogSwitch />
    </div>
  );
}

