document.addEventListener("DOMContentLoaded", function() {
  const formElements = document.querySelectorAll('.form-element');
  formElements.forEach((element, index) => {
      setTimeout(() => {
          element.classList.add('visible');
      }, index * 100); 
      });
});


function goBack() {
  window.history.back();
}

