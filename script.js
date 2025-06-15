  const text = document.querySelector(".typing");
    let str = text.textContent;
    text.textContent = "";
    let i = 0;
    function typeEffect() {
      if (i < str.length) {
        text.textContent += str.charAt(i);
        i++;
        setTimeout(typeEffect, 80);
      }
    }
    typeEffect();