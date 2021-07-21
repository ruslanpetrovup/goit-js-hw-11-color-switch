const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let randomColor = null;
const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const bodyEl = document.querySelector('body');

const editColor = () => {
    if (randomColor) {
        return
    }
    randomColor = setInterval(() => {
        bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)]
    },1000)
}
const editColorStop = () => {
    clearInterval(randomColor)
    randomColor = null;
}
btnStart.addEventListener('click', editColor);
btnStop.addEventListener('click', editColorStop)