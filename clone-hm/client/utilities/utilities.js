export const getImageUrl = (src) => {
  return `${process.env.API_HOST}${src}`;
};

export const commafy = (num) => {
  return num.toLocaleString("en-US");
};
