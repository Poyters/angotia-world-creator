import { log } from "../utils/log";

export const saveFile = (data, filename: string, type: string) => {
  log("SAVING_FILE");

  const file = new Blob([data], { type: type });

  const a = document.createElement("a");
  const url: string = URL.createObjectURL(file);
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
};
