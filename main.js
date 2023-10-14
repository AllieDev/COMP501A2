let target = document.getElementById('target');

let btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
  btn.addEventListener('click', changeMarkdown);
});

function changeMarkdown(e) {
  let md = document.getElementById('zero');
  md.remove();
  target.innerHTML = `<zero-md class="prose max-w-5xl w-full" id="zero" src="./md/${e.currentTarget.dataset.md}.md">
                        <template data-merge="append">
                             <link rel="stylesheet" href="./styles.css" />
                        </template>
                    </zero-md>`;

  highlightSelectedBtn(e);
}

function highlightSelectedBtn(e) {
  //  Remove selected class from all other buttons
  btns.forEach((btn) => btn.classList.remove('selected'));
  //  Add selected class to the clicked button
  e.currentTarget.classList.add('selected');
}

// Lazy loading images ----------------------------------------------------------------
const lazyImages = document.querySelectorAll('img');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = entry.target;
      observer.unobserve(image);
    }
  });
}, options);

lazyImages.forEach((image) => {
  imageObserver.observe(image);
});
