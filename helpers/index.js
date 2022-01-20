export const truncateText = (text, maxLength) => {
  return text.substr(0, maxLength - 1) + (text.length > maxLength ? '...' : '');
};
