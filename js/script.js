$(document).ready(function () {
  $('.hero, .card, .package-card, .section-header, .form-box, .faq-item').hide().fadeIn(1000);

  $('.question').on('click', function () {
    $(this).toggleClass('open');
    $(this).next('.answer').slideToggle(220);
  });

  function updateTotal() {
    const price = parseFloat($('#plan').val()) || 0;
    const subtotal = price;
    const tax = parseFloat((subtotal * 0.03).toFixed(2));
    const total = parseFloat((subtotal + tax).toFixed(2));

    $('#subtotal').text(subtotal.toFixed(2));
    $('#tax').text(tax.toFixed(2));
    $('#total').text(total.toFixed(2));
  }

  $('#plan').on('input change', updateTotal);

  $('#bookingForm').on('submit', function (e) {
    e.preventDefault();

    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const phone = $('#phone').val().trim();
    const plan = $('#plan').val();

    if (!name || !email || !phone) {
      showNotification('Please complete all required fields before submitting.', 'error');
      return;
    }

    showNotification('Subscription submitted successfully — we will contact you shortly.', 'success');
  });

  function showNotification(message, type) {
    $('#notificationMessage').text(message);
    const $notification = $('#notification');
    $notification.removeClass('error success').addClass(type).addClass('active');
  }

  $('#notificationOK').on('click', function () {
    $('#notification').removeClass('active');
  });

  updateTotal();
});
