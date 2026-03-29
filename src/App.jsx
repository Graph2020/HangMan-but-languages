import { useState } from "react";
import Win from "./components/Win";
import { languages } from "./languages";
function App() {
  const [currentWord, setCurrentWord] = useState("react");

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const keyboardButtons = alphabet.map((keyboard) => (
    <button className="bg-keyboard size-8 rounded-sm border border-white p-1 text-black">
      {keyboard.toUpperCase()}
    </button>
  ));

  const displayWord = currentWord
    .split("")
    .map((letter) => (
      <span className="span-square">{letter.toUpperCase()}</span>
    ));

  const displayLanguages = languages.map(({ name, backgroundColor, color }) => (
    <div
      style={{ backgroundColor: backgroundColor, color: color }}
      className="w-fit rounded-sm p-1"
    >
      {name}
    </div>
  ));

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-[#282726] px-5 py-10 text-center">
      <div>
        <h1 className="font-main text-xl font-medium text-[#F9F4DA]">
          Assembly: Endgame
        </h1>
        <p className="text-[#8E8E8E]">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </div>
      <Win />
      {/* languages  */}
      <div className="flex max-w-96 flex-wrap items-center justify-center gap-1">
        {displayLanguages}
      </div>
      {/* displayed word */}
      <div className="flex gap-1">{displayWord}</div>
      {/* keyboard */}
      <div className="flex max-w-96 flex-wrap justify-center gap-2">
        {keyboardButtons}
      </div>
      <button className="rounded-sm bg-sky-500 px-8 py-2 text-black sm:px-10 md:px-12">
        New Game
      </button>
    </main>
  );
}

export default App;
