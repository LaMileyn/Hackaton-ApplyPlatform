import { v4 as uuidv4 } from 'uuid';

const generateUuid = () => {
  return Math.round((new Date().valueOf() / 100000) * Math.random());
};

export default generateUuid;
