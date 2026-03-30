import { getFarewellText } from "../utils";
import { languages } from "../languages";
import clsx from "clsx";

function Win({ won, lost, mistakes }) {
  const showFarewell = !won && !lost && mistakes > 0;

  return (
    <div
      className={clsx(
        "flex w-full flex-col rounded-md text-white sm:w-96 sm:px-6",
        won && "bg-[#10A95B]",
        lost && "bg-rose-500",
        showFarewell && "bg-[#7A5EA7]",
        !won && !lost && !showFarewell && "opacity-0",
      )}
    >
      <h3 className="text-lg">
        {won
          ? "You Win!"
          : lost
            ? "You Lose!"
            : getFarewellText(languages[mistakes - 1]?.name)}
      </h3>

      {won && <p className="text-md -mt-1">Well done! 🎉</p>}
      {lost && <p className="text-md -mt-1">Better luck next time! 🤔</p>}
    </div>
  );
}

export default Win;
