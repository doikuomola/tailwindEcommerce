export const excerpt = (str, count) => {
  if (str.length > 10) {
    str = str.substring(0, count) + '...';
  }
  return str;
};
