import "./App.css";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/button";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello this is the first step to a portfolio journey
      </h1>

      <div className="pt-[4.7rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10">Something</Button>
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
