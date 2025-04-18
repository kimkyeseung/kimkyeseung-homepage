import { Main } from "./components/Main";
import ThemeToggle from "./components/ThemeToggle";
import { Portfolios } from "./Portfolios";

function App() {
  return (
    <div className="flex justify-center">
      <ThemeToggle />
      <div className="w-full max-w-[1280px] border border-red-500">
        <Main />
        <Portfolios />
      </div>
    </div>
  );
}

export default App;
