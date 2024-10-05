// ant-walker-demo.js
let currentConfig = {
    maxAnts: 64,
    antColor: '#4B3621',
    antSize: 12,
    addInterval: 30000,
  };
  
  function updateDemo() {
    currentConfig = {
      maxAnts: parseInt(document.getElementById('maxAnts').value),
      antColor: document.getElementById('antColor').value,
      antSize: parseInt(document.getElementById('antSize').value),
      addInterval: parseInt(document.getElementById('addInterval').value),
    };
  
    // Remove existing canvas if any
    const existingCanvas = document.querySelector('canvas');
    if (existingCanvas) {
      existingCanvas.remove();
    }
  
    // Initialize new Ant Walker with updated config
    initAntWalker(currentConfig);
  }
  
  function generateScript() {
    const script = `
  <script src="https://cdn.jsdelivr.net/gh/fauziabd/AntPrankJS@main/antprank.js"></script>
  <script>
      initAntWalker({
          maxAnts: ${currentConfig.maxAnts},
          antColor: "${currentConfig.antColor}",
          antSize: ${currentConfig.antSize},
          addInterval: ${currentConfig.addInterval}
      });
  </script>
      `;
  
    document.getElementById('scriptOutput').value = script.trim();
  }
  
  function initializeDemoPage() {
    document.getElementById('updateDemo').addEventListener('click', updateDemo);
    document
      .getElementById('generateScript')
      .addEventListener('click', generateScript);
  
    // Initialize the demo with default settings
    updateDemo();
  }
  
  // Initialize the page when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initializeDemoPage);
  