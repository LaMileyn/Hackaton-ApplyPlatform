import { v4 as uuidv4 } from 'uuid';

const generateUuid = (): string => {
  return uuidv4();
};

export default generateUuid;
