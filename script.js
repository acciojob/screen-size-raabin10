//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const sizeInfo = document.getElementById('sizeInfo');
  const sizeText = sizeInfo.querySelector('h1');

  function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    sizeText.textContent = `Width: ${width} and Height: ${height}`;
  }

  // Initial call to set size on load
  updateSize();

  // Update size on window resize
  window.addEventListener('resize', updateSize);
});
