/* ============================================
   PROMO BAR v15 - Premium Final
   Tetra Dent
   Senior UX/UI Design
   ============================================ */

(function () {
  'use strict';

  var SVG_GIFT = '<svg viewBox="0 0 24 24"><path d="M20 12v10H4V12"/><rect x="2" y="7" width="20" height="5" rx="1"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7C12 7 12 4.5 9.5 3 8.5 2.5 7 3 7 4.5S8.5 7 12 7z"/><path d="M12 7c0 0 0-2.5 2.5-4 1-.5 2.5 0 2.5 1.5S15.5 7 12 7z"/></svg>';

  var promotions = [
    { day: 'Lunes',     discount: 'Consulta de Cortesía + 10% OFF',   desc: 'al iniciar tratamiento' },
    { day: 'Martes',    discount: '20% OFF',                     desc: 'en Brackets Convencionales' },
    { day: 'Miércoles', discount: '30% OFF',                     desc: 'en Prótesis y Rehabilitación Oral' },
    { day: 'Jueves',    discount: '20% OFF',                     desc: 'en Brackets Convencionales' },
    { day: 'Viernes',   discount: '25% OFF',                     desc: 'en Blanqueamiento Dental' },
    { day: 'Sábado',    discount: '2x1',                         desc: 'en Profilaxis Profunda' }
  ];

  var DAYS = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  var DELAY = 5000;
  var SPEED = 350;
  var timer, idx = 0, busy = false;

  function getToday() {
    var d = DAYS[new Date().getDay()];
    for (var i = 0; i < promotions.length; i++) {
      if (promotions[i].day === d) return i;
    }
    return 0;
  }

  function render() {
    var box = document.querySelector('.promo-bar__ticker-inner');
    if (!box) return;
    box.innerHTML = '';

    for (var i = 0; i < promotions.length; i++) {
      var el = document.createElement('div');
      el.className = 'promo-bar__slide' + (i === idx ? ' active' : '');
      el.innerHTML =
        '<span class="promo-bar__day">' + promotions[i].day + '</span>' +
        '<span class="promo-bar__text">' +
          '<span class="promo-bar__highlight">' + promotions[i].discount + '</span> ' +
          promotions[i].desc +
        '</span>';
      box.appendChild(el);
    }
  }

  function advance() {
    if (busy) return;
    var all = document.querySelectorAll('.promo-bar__slide');
    if (all.length <= 1) return;
    busy = true;

    all[idx].classList.remove('active');
    all[idx].classList.add('exit');

    setTimeout(function () {
      all[idx].classList.remove('exit');
      idx = (idx + 1) % promotions.length;
      all[idx].classList.add('active');
      setTimeout(function () { busy = false; }, SPEED);
    }, SPEED);
  }

  function injectIcon() {
    var icon = document.querySelector('.promo-bar__icon');
    if (icon) icon.innerHTML = SVG_GIFT;
  }

  function init() {
    idx = getToday();
    injectIcon();
    render();
    timer = setInterval(advance, DELAY);
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
