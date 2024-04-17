function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  const input = document.querySelector('#controls input');
  const createButton = document.querySelector('button[data-create]');
  const destroyButton = document.querySelector('button[data-destroy]');
  const boxesDiv = document.getElementById('boxes');
  
  function createBoxes(amount) {
    boxesDiv.innerHTML = '';
    
    let size = 30;
    
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.marginBottom = '10px';
      
      boxesDiv.appendChild(box);
      
      size += 10;
    }
  }
  
  function destroyBoxes() {
    boxesDiv.innerHTML = '';
  }
  
  createButton.addEventListener('click', () => {
    createBoxes(input.value);
  });
  
  destroyButton.addEventListener('click', () => {
    destroyBoxes();
  });
  

