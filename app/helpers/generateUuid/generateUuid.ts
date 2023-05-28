import { v4 as uuidv4 } from 'uuid';

const generateUuid = () => {
  return Math.round(1 + 10000 * Math.random());
};

export default generateUuid;
