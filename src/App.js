import { GithubPins } from "./Components/GithubPins/GithubPins";
import { WorkHistory } from "./Components/WorkHistory/WorkHistory";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <GithubPins />
      <WorkHistory />
    </div>
  );
}

export default App;
