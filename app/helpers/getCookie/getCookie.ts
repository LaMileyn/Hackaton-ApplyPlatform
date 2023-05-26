import canUseDOM from '../canUseDOM/canUserDOM';

const getCookie = (name: string) => {
  if (!canUseDOM) return;

  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.&?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );

  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export default getCookie;
