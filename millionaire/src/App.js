import {Question} from "./components/question/question"
import {Title} from "./components/title"
import {SideWrapper} from "./components/sidewrapper/sidewrapper"
import {Answers} from "./components/answers/answers"

function App() {
  return (
    <div className="App">
      <Title/>
      <Question/>
      <SideWrapper/>
      <Answers/>
    </div>
  );
}

export default App;
