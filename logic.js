document.addEventListener('DOMContentLoaded', () => {
  const typewriterTitles = document.querySelectorAll('.typewriter-title');
  const typewriterParagraphs = document.querySelectorAll('.typewriter-paragraph');
  
  function typeWriterEffect(element, text, speed) {
    let charIndex = 0;

    function type() {
      if (charIndex < text.length) {
        element.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
      } else {
        element.style.borderRight = 'none'; // remove the cursor
      }
    }

    type();
  }

  function animateElements(elements, speed) {
    elements.forEach(element => {
      const text = element.getAttribute('data-text');
      element.textContent = '';
      element.style.borderRight = '2px solid black';
      typeWriterEffect(element, text, speed);
    });
  }

  animateElements(typewriterTitles, 50); // animate titles first

  setTimeout(() => {
    animateElements(typewriterParagraphs, 10); // animate paragraphs after a delay
  }, typewriterTitles.length * 400); // delay based on number of titles
});
