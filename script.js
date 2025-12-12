// small interactive bits
document.addEventListener('DOMContentLoaded', function () {
  // Pagination click demo
  document.querySelectorAll('.pagination .page-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.pagination .page-item').forEach(it => it.classList.remove('active'));
      link.parentElement.classList.add('active');
    });
  });

  // Demo: clicking sidebar links highlights
  document.querySelectorAll('.sidebar .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      document.querySelectorAll('.sidebar .nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  console.log('Dashboard (revised) loaded');
});
