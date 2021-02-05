export const ellipsisText = (text:string, limit:number = 17) => {
  if (text.length >= limit) {
    const ellipsedText = text.substr(0, limit - 3);
    return ellipsedText + "...";
  }

  return text;
};
