import uuid from 'uuid/v4';

export const createUserId = (): string => `${Date.now()}_${uuid().substring(0,10)}`;