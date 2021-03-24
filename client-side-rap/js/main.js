document.querySelector('button').addEventListener('click', getSide);

async function getSide() {
  try {
    const res = await fetch('http://localhost:8000/api/coin');
    const data = await res.json();

    console.log(Object.keys(data).length);

    if (Math.random() * 2 > 1) {
      document.querySelector('#name').textContent = Object.keys(data)[0];
    } else {
      document.querySelector('#name').textContent = Object.keys(data)[1];
    }
  } catch (err) {
    alert(err);
  }
}
