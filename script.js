const apiUrl = 'https://api.adviceslip.com/advice';

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Server Error!');
    }

    const data = await response.json();

    showData(data.slip);
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}

function showData(data) {
  //   console.log(data);

  const advice = document.querySelector('.advice');
  const adviceNumber = document.querySelector('.advice-number');

  adviceNumber.textContent = `ADVICE #${data.id}`;
  advice.textContent = `"${data.advice}"`;
}
const button = document.querySelector('.img-dice');

fetchData();

button.addEventListener('click', fetchData);
