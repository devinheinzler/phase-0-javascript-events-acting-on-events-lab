function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers,10);
    if (left < 360) {
        dodger.style.left = `${left + 5}px`;
    }
  }

  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers,10);
    if (left < 360) {
        dodger.style.left = `${left - 5}px`;
    }
  }