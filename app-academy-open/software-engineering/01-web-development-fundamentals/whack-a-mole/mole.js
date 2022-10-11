let score = 0;
let molesLeft = 30;
let popupLength = 3000;
let hideTimeout;
let clickable = false;

function popUpRandomMole() {
  if (molesLeft <= 0) {
    document.querySelector('.sb__game-over').classList.remove('sb__game-over--hidden');
    return;
  }


  const moleHeads = document.querySelectorAll('.wgs__mole-head');
  // was checking for --whacked, which made no sense, because to
  // go through 30 moles for game over, moles needed to be used/whacked
  // more than once
  // if (moleHeads.length === 0) {
  //   console.log(moleHeads.length);
  //   return;
  // }

  const moleIndex = Math.floor(Math.random() * moleHeads.length);
  const moleHead = moleHeads[moleIndex];

  clickable = true;
  moleHead.classList.remove('wgs__mole-head--hidden');
  // had to remove --whacked as part of hiding
  moleHead.classList.remove('wgs__mole-head--whacked');



  molesLeft -= 1;
  document.querySelector('.sb__moles').innerHTML = molesLeft;

  hideTimeout = setTimeout(() => hideMole(moleHead), popupLength);
}

function hideMole(mole) {
  clickable = false;
  mole.classList.add('wgs__mole-head--hidden');

  console.log(mole.classList);
  setTimeout(popUpRandomMole, 500);
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(popUpRandomMole, 0);

  const moleHeads = document.querySelectorAll('.wgs__mole-head');
  for (let moleHead of moleHeads) {
    moleHead.addEventListener('click', event => {
      if (!clickable) return;

      score += 1;
      document.querySelector('.sb__score').innerHTML = score;
      popupLength -= popupLength / 10;

      // UNCOMMENT THIS LINE OF CODE WHEN DIRECTED FOR THE BONUS
      event.target.classList.add('wgs__mole-head--whacked');

      clearTimeout(hideTimeout);
      hideMole(event.target);

      // UNCOMMENT THIS LINE OF CODE WHEN DIRECTED
      event.target.classList.add('wgs__mole-head--hidden');


    });
  }
});
