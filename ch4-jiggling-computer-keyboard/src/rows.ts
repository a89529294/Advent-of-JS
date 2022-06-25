import { Size } from "./App";
type Key = {
  key: string;
  size: Size;
  code: string;
};

export const firstRow: Key[] = [
  { key: "`", size: "sm", code: "Backquote" },
  { key: "0", size: "sm", code: "Digit0" },
  { key: "1", size: "sm", code: "Digit1" },
  { key: "2", size: "sm", code: "Digit2" },
  { key: "3", size: "sm", code: "Digit3" },
  { key: "4", size: "sm", code: "Digit4" },
  { key: "5", size: "sm", code: "Digit5" },
  { key: "6", size: "sm", code: "Digit6" },
  { key: "7", size: "sm", code: "Digit7" },
  { key: "8", size: "sm", code: "Digit8" },
  { key: "9", size: "sm", code: "Digit9" },
  { key: "-", size: "sm", code: "Minus" },
  { key: "=", size: "sm", code: "Equal" },
  { key: "DEL", size: "md", code: "Backspace" },
];

export const secondRow: Key[] = [
  { key: "TAB", size: "md", code: "Tab" },
  { key: "Q", size: "sm", code: "KeyQ" },
  { key: "W", size: "sm", code: "KeyW" },
  { key: "E", size: "sm", code: "KeyE" },
  { key: "R", size: "sm", code: "KeyR" },
  { key: "T", size: "sm", code: "KeyT" },
  { key: "Y", size: "sm", code: "KeyY" },
  { key: "U", size: "sm", code: "KeyU" },
  { key: "I", size: "sm", code: "KeyI" },
  { key: "O", size: "sm", code: "KeyO" },
  { key: "P", size: "sm", code: "KeyP" },
  { key: "[", size: "sm", code: "BracketLeft" },
  { key: "]", size: "sm", code: "BracketRight" },
  { key: "\\", size: "sm", code: "Backslash" },
];

export const thirdRow: Key[] = [
  { key: "CAPS", size: "lg", code: "CapsLock" },
  { key: "A", size: "sm", code: "KeyA" },
  { key: "S", size: "sm", code: "KeyS" },
  { key: "D", size: "sm", code: "KeyD" },
  { key: "F", size: "sm", code: "KeyF" },
  { key: "G", size: "sm", code: "KeyG" },
  { key: "H", size: "sm", code: "KeyH" },
  { key: "J", size: "sm", code: "KeyJ" },
  { key: "K", size: "sm", code: "KeyK" },
  { key: "L", size: "sm", code: "KeyL" },
  { key: ";", size: "sm", code: "Semicolon" },
  { key: "'", size: "sm", code: "Quote" },
  { key: "ENTER", size: "mdl", code: "Enter" },
];

export const fourthRow: Key[] = [
  { key: "SHIFT", size: "xl", code: "ShiftLeft" },
  { key: "Z", size: "sm", code: "KeyZ" },
  { key: "X", size: "sm", code: "KeyX" },
  { key: "C", size: "sm", code: "KeyC" },
  { key: "V", size: "sm", code: "KeyV" },
  { key: "B", size: "sm", code: "KeyB" },
  { key: "N", size: "sm", code: "KeyN" },
  { key: "M", size: "sm", code: "KeyM" },
  { key: ",", size: "sm", code: "Comma" },
  { key: ".", size: "sm", code: "Period" },
  { key: "/", size: "sm", code: "Slash" },
  { key: "SHIFT", size: "xxl", code: "ShiftRight" },
];
