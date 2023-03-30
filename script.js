const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', () => {

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  const bmi = weight / (height * height);
  result.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
});
