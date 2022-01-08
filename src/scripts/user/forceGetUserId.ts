import { createUserId } from "./createUserId";
import { log } from "../utils/log";
import { getUserId } from "./getUserId";

// Returns current User Id. If it does not exist in localStorage, create the new one
export const forceGetUserId = (): string => {
  log("FORCE_GET_USER_ID");

  const storage = localStorage;
  const existingUserId = getUserId();
  let newUserId = "";

  if (!existingUserId) {
    newUserId = createUserId();
    storage.setItem("userId", newUserId);
  }

  return existingUserId || newUserId;
};
