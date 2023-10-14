tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
    },
  },
};

let target = document.getElementById('target');

let btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
  btn.addEventListener('click', changeMarkdown);
});

function changeMarkdown(e) {
  let md = document.getElementById('zero');
  md.remove();
  var zeroMd = document.createElement('zero-md');
  zeroMd.setAttribute('src', `./md/${e.currentTarget.dataset.md}.md`);
  zeroMd.setAttribute('class', 'prose max-w-5xl w-full');
  zeroMd.setAttribute('id', 'zero');
  target.appendChild(zeroMd);

  // Add selected class to the clicked button
  highlightSelectedBtn(e);
}

function highlightSelectedBtn(e) {
  //   Remove selected class from all other buttons
  btns.forEach((btn) => btn.classList.remove('selected'));

  e.currentTarget.classList.add('selected');
}
