import {Question} from "../components/question/question"
import {Title} from "../components/title/title"
import {SideWrapper} from "../components/sidewrapper/sidewrapper"
import {Answers} from "../components/answers/answers"
import classes from "./index.module.css"

export const MainPage =()=>{
  return (
    <div className={classes.mainPage}>
      <Title/>
      <Question/>
      <SideWrapper/>
      <Answers/>
    </div>
  );
}

