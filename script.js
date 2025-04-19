function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}
const portfolioContainer = document.querySelector('.portfo-items');
const portfolioItems = document.querySelectorAll('.fo-item');
const paginationContainer = document.querySelector('.pagination');
let currentIndex = 0;

function createPaginationDots() {
  paginationContainer.innerHTML = ''; // Bersihkan titik-titik sebelumnya
  portfolioItems.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('pagination-dot');
    dot.dataset.index = index;
    dot.addEventListener('click', () => {
      scrollToItem(index);
    });
    paginationContainer.appendChild(dot);
  });
  updateActiveDot();
}

function updateActiveDot() {
  const dots = document.querySelectorAll('.pagination-dot');
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentIndex) {
      dot.classList.add('active');
    }
  });
}

function scrollToItem(index) {
  currentIndex = index;
  portfolioContainer.scrollTo({
    left: portfolioItems[index].offsetLeft,
    behavior: 'smooth'
  });
  updateActiveDot();
}

// Event listener untuk mendeteksi perubahan scroll (untuk memperbarui titik aktif)
portfolioContainer.addEventListener('scroll', () => {
  const containerWidth = portfolioContainer.offsetWidth;
  const scrollLeft = portfolioContainer.scrollLeft;

  portfolioItems.forEach((item, index) => {
    if (scrollLeft >= item.offsetLeft && scrollLeft < item.offsetLeft + containerWidth / 2) {
      currentIndex = index;
    } else if (index === portfolioItems.length - 1 && scrollLeft >= item.offsetLeft) {
      currentIndex = index;
    }
  });
  updateActiveDot();
});

// Inisialisasi
if (portfolioItems.length > 0) {
  createPaginationDots();
}