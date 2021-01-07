import { createUserId } from './createUserId';

// Returns current User Id. If it does not exist in localStorage, create the new one
export const manageUserId = (): string => {
  const storage: Storage = localStorage;
  const existingUserId = storage.getItem('userId');
  let newUserId = '';

  if (!existingUserId) {
    newUserId = createUserId();
    storage.setItem('userId', newUserId);
  }

  console.log(existingUserId, newUserId);
  return existingUserId || newUserId;
};