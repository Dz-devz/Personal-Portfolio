import "./App.css";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/header";

export default function App() {
  return (
    <>
      <div className="pt-[4.7rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
}
