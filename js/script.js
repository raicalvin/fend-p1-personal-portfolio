
// Apparently, the modal below is completely empty and the CSS styles are not applied until the openModal() function is called...not sure why. And then on 'Function is starting...', the modal is populated with CSS styles.
var modal = document.getElementsByClassName('modal');
console.log(modal);

function openModalQuizroid() {
  console.log('Function is starting...');
  console.log(modal); // The modal should have already loaded CSS before this function is called
  console.log("The above is the modal before the change...");
  // You have to add [0] because the .getElementsByClassName() method will return a list and we want the first element in that list
  document.getElementsByClassName('modal-quizroid')[0].style.display = 'block';
  console.log(modal);
  console.log('The display in modal should have changed');
};

function openModalDadsWebsite() {
  document.getElementsByClassName('modal-dads-website')[0].style.display = 'block';
}

function openModalLinearInteprolator() {
  document.getElementsByClassName('modal-linear-interpolation-app')[0].style.display = 'block';
}

function openModalDarkSand() {
  document.getElementsByClassName('modal-dark-sand')[0].style.display = 'block';
}

function openModalBusinessCard() {
  document.getElementsByClassName('modal-business-card')[0].style.display = 'block';
}

function openModalPythonQuiz() {
  document.getElementsByClassName('modal-python-quiz')[0].style.display = 'block';
}

function openModalSma4() {
  document.getElementsByClassName('modal-sma4')[0].style.display = 'block';
}

function openModalGalaxy() {
  document.getElementsByClassName('modal-galaxy')[0].style.display = 'block';
}

function openModalQuidditchScoreKeeper() {
  document.getElementsByClassName('modal-quidditch-score-keeper')[0].style.display = 'block';
}

function openModalCustomPC() {
  document.getElementsByClassName('modal-custom-pc')[0].style.display = 'block';
}

function openModalSimmySigma() {
  document.getElementsByClassName('modal-simmy-sigma')[0].style.display = 'block';
}

function openModalTunnelRendering() {
  document.getElementsByClassName('modal-tunnel-rendering')[0].style.display = 'block';
}

// Single function to close modals currently open on screen
function closeModalDadsWebsite() {
  document.getElementsByClassName('modal-dads-website')[0].style.display = 'none';
};

function closeModalQuizroid() {
  document.getElementsByClassName('modal-quizroid')[0].style.display = 'none';
}

function closeModalLinearInterpolator() {
  document.getElementsByClassName('modal-linear-interpolation-app')[0].style.display = 'none';
}

function closeModalDarkSand() {
  document.getElementsByClassName('modal-dark-sand')[0].style.display = 'none';
}

function closeModalBusinessCard() {
  document.getElementsByClassName('modal-business-card')[0].style.display = 'none';
}

function closeModalPythonQuiz() {
  document.getElementsByClassName('modal-python-quiz')[0].style.display = 'none';
}

function closeModalSma4() {
  document.getElementsByClassName('modal-sma4')[0].style.display = 'none';
}

function closeModalGalaxy() {
  document.getElementsByClassName('modal-galaxy')[0].style.display = 'none';
}

function closeModalQuidditchScoreKeeper() {
  document.getElementsByClassName('modal-quidditch-score-keeper')[0].style.display = 'none';
}

function closeModalCustomPC() {
  document.getElementsByClassName('modal-custom-pc')[0].style.display = 'none';
}

function closeModalSimmySigma() {
  document.getElementsByClassName('modal-simmy-sigma')[0].style.display = 'none';
}

function closeModalTunnelRendering() {
  document.getElementsByClassName('modal-tunnel-rendering')[0].style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it (well, that's how this is SUPPOSED to work in future update)
function closeModalWindow() {
  console.log(event.target);
  if (event.target == document.getElementsByClassName('inner-content')) {
    console.log('Inside');
  } else {
    console.log('Did not click');
  }
}
