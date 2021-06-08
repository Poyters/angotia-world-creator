import { log } from '../utils/log';

export const getUserId = () => {
  const userId = localStorage.getItem('userId');

  log('GOT_USER_ID', { userId });

  return userId;
};