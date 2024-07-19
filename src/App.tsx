import "./App.css";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/header";

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Dz.dev</h1>

      <div className="pt-[4.7rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>

      <ButtonGradient />
    </>
  );
}
