import {MainPage} from "./pages/mainPage"
import { QuestionProvider } from "./providers/questionProvider";

function App() {
  return (
    <div className="App">
      <QuestionProvider>
        <MainPage/>
      </QuestionProvider>
    </div>
  );
}

export default App;
