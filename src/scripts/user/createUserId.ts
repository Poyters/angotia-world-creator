import { v4 as uuid } from "uuid";
import { log } from "../utils/log";

export const createUserId = (): string => {
  const userId = `${Date.now()}_${uuid().substring(0, 10)}`;

  log("CREATED_USER_ID", { userId });

  return userId;
};
