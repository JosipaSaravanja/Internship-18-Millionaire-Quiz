import {MainPage} from "./pages/mainPage"
import { QuestionProvider } from "./providers/questionProvider";
import { DialogProvider } from "./providers/dialogProvider";

function App() {
  return (
    <div className="App">
    <QuestionProvider>
      <DialogProvider>
        <MainPage/>
      </DialogProvider>
      </QuestionProvider>
    </div>
  );
}

export default App;
