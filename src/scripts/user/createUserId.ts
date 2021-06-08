import uuid from 'uuid/v4';
import { log } from '../utils/log';

export const createUserId = (): string => {
  const userId = `${Date.now()}_${uuid().substring(0,10)}`;
  
  log('CREATED_USER_ID', { userId });

  return userId;
};