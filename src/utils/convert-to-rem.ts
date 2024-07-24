const convertToRem = (value: any) => {
  if (value && !isNaN(value)) {
    return value / 16 + 'rem';
  }
  return value;
};

export { convertToRem };
