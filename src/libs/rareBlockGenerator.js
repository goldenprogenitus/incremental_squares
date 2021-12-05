export const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const rareBlockGenerator = (colorList, setColorList) => id => {
  const newColorList = [...colorList];
  newColorList[id] = getRandomColor();
  setColorList(newColorList);
};
