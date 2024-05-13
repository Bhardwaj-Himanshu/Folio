const input = document.getElementById('input');
const inputBox = document.getElementById('input-box');
const output = document.getElementById('output');

const onetwothreechecker = (e, createdElement2, inputBoxValue) => {
  if (e.key == 'Enter') {
    console.log(inputBoxValue);
    switch (inputBoxValue) {
      case '1':
        createdElement2.textContent = `${e.key}`;
        break;

      default:
        break;
    }
  }
};

document.addEventListener('keydown', (e) => {
  if (e.code == 'Enter') {
    const createdElement0 = document.createElement('div');
    createdElement0.innerHTML = `<span>|->${inputBox.value}</span>`;
    // const createdElement1 = document.createElement('div');
    // createdElement1.textContent = inputBox.value;
    // createdElement1.classList.add('input-text');
    output.appendChild(createdElement0);
    // Now here case when pairs will start
    let createdElement2 = document.createElement('div');
    switch (inputBox.value) {
      case 'help':
        createdElement2.innerHTML = `You can use <span class="highlighted-text">clear</span>,<span class="highlighted-text">whoami</span>,<span class="highlighted-text">help</span>,<span class="highlighted-text">categories</span>`;
        break;
      case 'whoami':
        async function getIPAddress() {
          try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
          } catch (error) {
            console.error('Error fetching IP address:', error);
            throw error; // Re-throw the error to propagate it
          }
        }
        getIPAddress().then((ipAddress) => {
          createdElement2.innerHTML = `I am you, and you are ${ipAddress}`;
        });
        break;
      case 'clear':
        output.innerHTML = '';
        break;
      case 'categories':
        createdElement2.innerHTML = `<div id='1'>1.Mariguana</div>
                                    <div id='2'>2. Weed </div>
                                    <div id='3'>3. Heroine </div>                    `;

        document.addEventListener('keydown', (e) => {
          onetwothreechecker(e, createdElement2, inputBox.value);
        });
        break;
      default:
        // document.removeEventListener(
        //   'keydown',
        //   createdElement2,
        //   inputBox.value
        // );
        output.removeChild(createdElement0);
        createdElement2.innerHTML = `|x Add something from the help you high!`;
        break;
    }
    output.appendChild(createdElement2);
    inputBox.value = '';
  }
});
