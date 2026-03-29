import Win from "./components/Win";
import { languages } from "./languages";
function App() {
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
      <div className="flex max-w-96 flex-wrap items-center justify-center gap-1">
        {displayLanguages}
      </div>
    </main>
  );
}

export default App;
