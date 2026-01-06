const reveals = document.querySelectorAll('.reveal');
const products = document.getElementById('products');

function onScroll() {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('active');
  });

  const productTop = products.getBoundingClientRect().top;
  if (productTop < trigger) {
    products.classList.add('show');
  }
}

window.addEventListener('scroll', onScroll);