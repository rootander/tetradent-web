(function () {
  'use strict';

  var WHATSAPP_NUMBER = '51970623615';

  var promociones = {
    1: {
      dia: 'Lunes',
      nombre: 'Pack "Cero Excusas"',
      items: [
        'Consulta S/ 0 al iniciar cualquier tratamiento.',
        '10% OFF en el plan de tratamiento elegido.'
      ]
    },
    2: {
      dia: 'Martes',
      nombre: 'Pack "Inicia tu Ortodoncia"',
      items: [
        '20% OFF en Brackets Convencionales.',
        'Incluye evaluación de especialidad + descuento directo en la instalación.'
      ]
    },
    3: {
      dia: 'Miércoles',
      nombre: 'Pack "Renueva tu Sonrisa"',
      items: [
        '30% OFF en Prótesis y Rehabilitación Oral.',
        'Diseñado para devolver funcionalidad y estética a tu boca.'
      ]
    },
    4: {
      dia: 'Jueves',
      nombre: 'Pack "Inicia tu Ortodoncia"',
      items: [
        '20% OFF en Brackets Convencionales.',
        '¡Segunda oportunidad de la semana para dar el primer paso!'
      ]
    },
    5: {
      dia: 'Viernes',
      nombre: 'Pack "Sonrisa Brillante"',
      items: [
        '25% OFF en Blanqueamiento Dental.',
        'Incluye diagnóstico previo + sesión de aclaramiento para lucir dientes más blancos al instante.'
      ]
    },
    6: {
      dia: 'Sábado',
      nombre: 'Pack Dueto "Sonrisa x2"',
      items: [
        '2x1 en Profilaxis Profunda.',
        'Ven con un acompañante y pagan solo una limpieza dental.',
        'Ideal para parejas o amigos.'
      ]
    },
    0: { dia: 'Domingo', nombre: '', items: [] }
  };

  var hoy = new Date().getDay();

  function whatsappLink(dia, promo) {
    var text = 'Hola!! Quiero agendar mi cita para la promoción del ' + dia + ' - ' + promo.nombre;
    return 'https://api.whatsapp.com/send?phone=' + WHATSAPP_NUMBER + '&text=' + encodeURIComponent(text);
  }

  function renderPromoDelDia() {
    var el = document.getElementById('promo-dia-container');
    if (!el) return;

    if (hoy === 0) {
      el.innerHTML =
        '<div class="promo-dia promo-dia--domingo">' +
        '<div class="promo-dia-left">' +
        '<i class="fas fa-coffee"></i>' +
        '<h4>Hoy no hay promociones disponibles</h4>' +
        '<p>¡Regresa el lunes para aprovechar nuestras ofertas!</p>' +
        '</div></div>';
      return;
    }

    var p = promociones[hoy];
    var li = '';
    for (var i = 0; i < p.items.length; i++) {
      li += '<li>' + p.items[i] + '</li>';
    }

    var descuento = '';
    if (hoy === 1) descuento = '10%';
    else if (hoy === 2) descuento = '20%';
    else if (hoy === 3) descuento = '30%';
    else if (hoy === 4) descuento = '20%';
    else if (hoy === 5) descuento = '25%';
    else if (hoy === 6) descuento = '2x1';

    el.innerHTML =
      '<div class="promo-dia">' +
      '<div class="promo-dia-left">' +
      '<span class="promo-dia-tag">Promoción del Día</span>' +
      '<h4>' + p.nombre + '</h4>' +
      '<div class="promo-dia-pack">' + p.dia + '</div>' +
      '<ul>' + li + '</ul>' +
      '</div>' +
      '<div class="promo-dia-right">' +
      '<div class="promo-dia-dia">' + p.dia + '</div>' +
      '<div class="promo-dia-descuento">' + descuento + '</div>' +
      '<div class="promo-dia-subdesc">OFF en la promoción de hoy</div>' +
        '<a href="' + whatsappLink(p.dia, p) + '" target="_blank" class="promo-wsp">' +
      '<i class="fab fa-whatsapp"></i> Agendar por WhatsApp' +
      '</a>' +
      '</div>' +
      '</div>';
  }

  function renderPromoSemana() {
    var el = document.getElementById('promo-semana-container');
    if (!el) return;

    var html = '';
    var dias = [1, 2, 3, 4, 5, 6];
    var descuentos = ['10% OFF', '20% OFF', '30% OFF', '20% OFF', '25% OFF', '2x1'];

    for (var i = 0; i < dias.length; i++) {
      var d = dias[i];
      var p = promociones[d];
      var activo = d === hoy ? ' promo-item--active' : '';

      var li = '';
      for (var j = 0; j < p.items.length; j++) {
        li += '<li>' + p.items[j] + '</li>';
      }

      html +=
        '<div class="promo-item' + activo + '">' +
        '<div class="promo-item__dia">' + p.dia + '</div>' +
        '<div class="promo-item__nombre">' + p.nombre + '</div>' +
        '<div class="promo-item__desc">' + descuentos[i] + '</div>' +
        '<ul>' + li + '</ul>' +
      '<a href="' + whatsappLink(p.dia, p) + '" target="_blank" class="promo-wsp">' +
        '<i class="fab fa-whatsapp"></i> Agendar' +
        '</a>' +
        '</div>';
    }

    el.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderPromoDelDia();
    renderPromoSemana();
  });
})();
