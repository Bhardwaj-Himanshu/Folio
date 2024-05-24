const input = document.getElementById('input');
const inputBox = document.getElementById('input-box');
const output = document.getElementById('output');

document.addEventListener('keydown', (e) => {
  if (e.code == 'Enter') {
    const createdElement0 = document.createElement('div');
    createdElement0.innerHTML = `<span>|->${inputBox.value}</span>`;
    output.appendChild(createdElement0);
    // Now here case when pairs will start
    let createdElement1 = document.createElement('div');
    switch (inputBox.value) {
      case 'help':
        createdElement1.innerHTML = `You can use <span class="highlighted-text">clear</span>,<span class="highlighted-text">whoami</span>,<span class="highlighted-text">help</span>,<span class="highlighted-text">categories</span>`;
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
          createdElement1.innerHTML = `I am Himanshu, and you are ${ipAddress}`;
        });
        break;
      case 'clear':
        output.innerHTML = '';
        break;
      case 'categories':
        createdElement1.innerHTML = `<div id='1'class="bold">1.Marijuana</div>
                                    <div id='2' class="bold">2. Cocaine </div>
                                    <div id='3' class="bold">3. Heroine </div>`;
        break;
      case '1':
        createdElement1.innerHTML = `<div class="category">
                                      <img class="drug-image" src='../static/black_white_marijuana.jpg'>
                                      <h4>Marijuana</h4>
                                      <p>
                                      Marijuana, also known as cannabis, is a psychoactive drug derived from the Cannabis plant. It contains THC (tetrahydrocannabinol), which is responsible for its mind-altering effects. Users often experience relaxation, euphoria, and altered sensory perceptions. While some use marijuana for recreational purposes, it also has medicinal applications, such as pain relief and reducing nausea in chemotherapy patients. However, it can impair short-term memory, coordination, and judgment, and its long-term effects are still being studied. Despite its increasing legalization and medical use, marijuana remains a controversial substance with both advocates and detractors.
                                      </p>        
                                      </div>`;
        break;
      case '2':
        createdElement1.innerHTML = `<div class="category">
                                      <img class="drug-image" src='../static/black_white_heroine.jpeg'>
                                      <h4>Heroine</h4>
                                      <p>
                                      Heroin is a highly addictive opioid derived from morphine, a substance extracted from the opium poppy plant. It is often used illicitly for its intense euphoric effects, which occur rapidly after use. Heroin can be injected, snorted, or smoked, each method posing significant health risks. Chronic use can lead to severe physical and psychological dependence, with withdrawal symptoms that are particularly harsh. The use of contaminated needles for injection can also spread infectious diseases such as HIV and hepatitis. Heroin overdose is a critical risk, frequently resulting in respiratory failure and death.
                                      </p>        
                                      </div>`;
        break;
      case '3':
        createdElement1.innerHTML = `<div class="category">
                                      <img class="drug-image" src='../static/black_white_cocaine.jpg'>
                                      <h4>Cocaine</h4>
                                      <p>
                                      Cocaine is a powerful stimulant drug made from the leaves of the coca plant native to South America. It is often found in powder form, which can be snorted, injected, or smoked (in the form of crack cocaine). Cocaine produces a short-lived, intense high that includes increased energy, alertness, and euphoria. However, it also has severe adverse effects such as heart attack, stroke, and violent behavior. The risk of addiction is high, and repeated use can lead to tolerance, requiring higher doses to achieve the same effects. Cocaine abuse also contributes to numerous social and legal problems, making it a significant public health concern.
                                      </p>        
                                      </div>`;
        break;
      default:
        output.removeChild(createdElement0);
        createdElement1.innerHTML = `<div>|x Looks like you were already high before entering the page, type <span class="highlighted-text">help</span>, but I don't think so you would be able to do that!</div>`;
        break;
    }
    output.appendChild(createdElement1);
    inputBox.value = '';
  }
});
