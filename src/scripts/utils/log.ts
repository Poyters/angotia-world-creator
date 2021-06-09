import logsConfig from '../../assets/configs/logs.config.json';
import { deepCopy } from './deepCopy';
import { isEmptyObject } from './isEmptyObject';
import { Log } from '../../models/log.model';

export const log = (logId: string, additionalData = {}) => {
  if (process.env.REACT_APP_APPLICATION_LOGS !== Log.enabled) return;

  const logMessage = logsConfig?.[logId]?.message;

  if (!logsConfig?.[logId]) {
    const logIdCopy = deepCopy(logId);

    logId = 'UNKNOWN_LOG';
    additionalData = {
      invalidEventData: { ...additionalData },
      invalidLogId: logIdCopy
    };
  }

  const date = new Date();
  const additionalInfo = isEmptyObject(additionalData)
    ? ''
    : `| ${JSON.stringify(additionalData)}`;

  console.log(
    `${date.toLocaleString('pl-PL')} | ${logId} | ${logMessage} ${additionalInfo}`
  );
};
