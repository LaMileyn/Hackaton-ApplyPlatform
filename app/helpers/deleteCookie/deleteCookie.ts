import setCookie from '../setCookie';

const deleteCookie = (name: string) => {
  setCookie(name, '', { expires: -1 });
};

export default deleteCookie;
