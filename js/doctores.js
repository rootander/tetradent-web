// Doctores - Carousel, Lightbox y interacciones
document.addEventListener('DOMContentLoaded', function () {
  var carousels = document.querySelectorAll('.casos-modal .carousel');
  carousels.forEach(function (carousel) {
    carousel.addEventListener('slid.bs.carousel', function (e) {
      var id = carousel.getAttribute('id');
      var indicators = document.querySelectorAll(
        '[data-bs-target="#' + id + '"].indicador-dot',
      );
      indicators.forEach(function (dot) {
        dot.classList.remove('active');
      });
      indicators[e.to].classList.add('active');
    });
  });

  document.querySelectorAll('.doctor-photo').forEach(function (photo) {
    var row = photo.closest('.doctor-row');
    photo.addEventListener('mouseenter', function () {
      row.classList.add('photo-hover');
    });
    photo.addEventListener('mouseleave', function () {
      row.classList.remove('photo-hover');
    });
  });

  document.querySelectorAll('.servicio-card').forEach(function (card) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function (e) {
      if (e.target.closest('.btn-servicio')) return;
      var img = card.querySelector('.servicio-card__image img');
      if (img) {
        document.getElementById('lightbox-img').src = img.src;
        document.getElementById('lightbox').classList.add('active');
      }
    });
  });

  document.querySelectorAll('.casos-modal').forEach(function (modal) {
    modal.addEventListener('show.bs.modal', function () {
      var carousel = modal.querySelector('.carousel');
      if (carousel) {
        var bsCarousel = bootstrap.Carousel.getInstance(carousel);
        if (bsCarousel) bsCarousel.to(0);
        else
          (carousel.querySelector('.carousel-item.active') &&
            carousel.querySelector('.carousel-item.active').classList.remove('active')) ||
            null;
        var items = carousel.querySelectorAll('.carousel-item');
        items.forEach(function (item, i) {
          item.classList.toggle('active', i === 0);
        });
        var dots = carousel.parentElement.querySelectorAll('.indicador-dot');
        dots.forEach(function (dot, i) {
          dot.classList.toggle('active', i === 0);
        });
      }
    });
  });
});

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});
