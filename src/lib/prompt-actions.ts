import { toast } from "sonner";
import { ILevel, levels } from "./states/levels";

export const performScan = (
  area: "right" | "left" | "around" | "back" | "forward",
  level: ILevel
) => {
  switch (area) {
    case "around":
      return "There are, " + level.clues.length + " notes in this level";
      break;
    case "back":
      return level.clues.find((clue) => clue.location === "Back")?.description;
      break;
    case "forward":
      return level.clues.find((clue) => clue.location === "Forward")
        ?.description;
      break;
    case "left":
      return level.clues.find((clue) => clue.location === "Left")?.description;
      break;
    case "right":
      return level.clues.find((clue) => clue.location === "Right")?.description;
      break;
    default:
      return "nothing";
      break;
  }
};

export const showInventory = (setShowInv: (state: boolean) => void) => {
  setShowInv(true);
};

export const storeItem = (
  label: "Food" | "Scaffolding" | "Pills",
  setItems: (state: any) => void,
  items: any[]
) => {
  setItems([
    ...items,
    {
      label: label,
    },
  ]);
};

export default function promptActions(
  prompt: {
    value: string;
    label: string;
  },
  level: ILevel,
  setLevel: (level: ILevel) => void,
  setPrompt: (state: string) => void,
  setPinDialog: (state: boolean) => void,
  invOpen: boolean,
  setInvOpen: (state: boolean) => void,
  setItems: (state: any) => void,
  items: any[]
) {
  if (prompt.label.includes("Whereami")) {
    console.log(true);
    setPrompt(level?.level + ". " + level.name);
  } else if (prompt.label.includes("Look Around")) {
    console.log("You briefly scan the area...");
    setPrompt(performScan("around", level) + "");
  } else if (prompt.label.includes("Look Right")) {
    console.log("You look to your right...");
    setPrompt(performScan("right", level) + "");
  } else if (prompt.label.includes("Look Left")) {
    console.log("You look to your left...");
    setPrompt(performScan("left", level) + "");
  } else if (prompt.label.includes("Look Back")) {
    console.log("You look to the back...");
    setPrompt(performScan("back", level) + "");
  } else if (prompt.label.includes("Look Forward")) {
    console.log("You look ahead in detail...");
    setPrompt(performScan("forward", level) + "");
  } else if (prompt.label.includes("Pill overdose")) {
    if (level.level === levels.length) {
      console.log("You take the pills and wake up...");
      setPrompt(
        "You woke up, and its all over... In the sun, the horizon. The sunset, the view. No harm in sight. It was all, just a dream? Or am I in another sequence"
      );
    } else {
      setPrompt("Woah, seems like I can't manage to overdose.");
      console.log("This action is only available on the last level.");
    }
  } else if (prompt.label.includes("PIN")) {
    setPinDialog(true);
  } else if (prompt.label.includes("Inventory")) {
    console.log("Checking your inventory...");
    showInventory(setInvOpen);
  } else if (prompt.label.includes("store left")) {
    const left = level.items.find((e) => e.location == "Left");
    if (
      (left !== undefined && left?.label === "Food") ||
      left?.label === "Pills" ||
      left?.label === "Scaffolding"
    ) {
      storeItem(left?.label, setItems, items);
      setPrompt("Stored " + left?.label + "");
    } else {
      setPrompt("hmm, nothing there");
    }
    console.log("Storing an item...");
  } else if (prompt.label.includes("store right")) {
    const left = level.items.find((e) => e.location == "Right");
    if (
      (left !== undefined && left?.label === "Food") ||
      left?.label === "Pills" ||
      left?.label === "Scaffolding"
    ) {
      storeItem(left?.label, setItems, items);
      setPrompt("Stored " + left?.label + "");
    } else {
      setPrompt("hmm, nothing there");
    }
    console.log("Storing an item...");
  } else if (prompt.label.includes("store back")) {
    const left = level.items.find((e) => e.location == "Back");
    if (
      (left !== undefined && left?.label === "Food") ||
      left?.label === "Pills" ||
      left?.label === "Scaffolding"
    ) {
      storeItem(left?.label, setItems, items);
      setPrompt("Stored " + left?.label + "");
    } else {
      setPrompt("hmm, nothing there");
    }
    console.log("Storing an item...");
  } else if (prompt.label.includes("store forward")) {
    const left = level.items.find((e) => e.location == "Forward");
    if (
      (left !== undefined && left?.label === "Food") ||
      left?.label === "Pills" ||
      left?.label === "Scaffolding"
    ) {
      storeItem(left?.label, setItems, items);
      setPrompt("Stored " + left?.label + "");
    } else {
      setPrompt("hmm, nothing there");
    }
    console.log("Storing an item...");
  } else if (prompt.label.includes("hide")) {
    console.log("You hide from the monster...");
    setPrompt("You thought you could hide in your dreams? Funny...");
  } else if (prompt.label.includes("grab")) {
    console.log("You grab onto something...");
    setPrompt("You've grabbed onto something");
  } else if (prompt.label.includes("climb")) {
    if (level.optionsAllowed.climb) {
      console.log("You climb...");
      setPrompt("You climbed onto something");
    } else {
      console.log("Climbing is not allowed at this level.");
      setPrompt("You didn't climb onto anything");
    }
  } else if (prompt.label.includes("block entrance")) {
    if (items.filter((e) => e.label === "Scaffolding").length < 0) {
      setPrompt("Blocking Entrance...");
    } else {
      setPrompt("Hmm, not enough scaffolding.");
    }
  } else if (prompt.label.includes("go back")) {
    console.log("Going to the previous stage...");
    if (level.level == 1) {
      setLevel(levels[level.level - 2]);
      setPrompt("Woah, and now i'm back again.");
    } else {
      setPrompt("You are on the first level.");
    }
  } else if (prompt.label.includes("hello")) {
    console.log("Hello there!");
    setPrompt("Hi?");
  } else if (prompt.label.includes("what am i thinking?")) {
    setPrompt("Gosh, how do I get out of here");
    console.log("You feel a sense of curiosity and wonder...");
  } else if (prompt.label.includes("hint")) {
    console.log("Here’s a hint...");
    setPrompt("Hint is: " + level.pin);
  } else if (prompt.label.includes("hack")) {
    if (level.optionsAllowed.hack) {
      console.log("Attempting to hack...");
      setPrompt("Hacking...");
    } else {
      setPrompt("Cannot Hack");

      console.log("Hacking is not allowed at this level.");
    }
  } else if (prompt.label.includes("win")) {
    console.log("You exit the dream sequences and win the game!");
    if (level.level == 8) {
      setPrompt(
        "You woke up, and its all over... In the sun, the horizon. The sunset, the view. No harm in sight. It was all, just a dream? Or am I in another sequence"
      );
    } else {
      setPrompt("We didn't reach that point yet...");
    }
  } else {
    console.log("Command not recognized.");
    toast("Command not Recongnized", { position: "top-center" });
  }
}
