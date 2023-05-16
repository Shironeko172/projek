//modal
// Ambil button
var btn = document.querySelector('[data-target="modal-1"]');
// Ambil modal
var modal = document.querySelector('#modal-1');
// Ambil tombol close
var closeBtn = modal.querySelector('.close');
// Ketika button ditekan, tampilkan modal
btn.addEventListener('click', function () {
  modal.style.display = 'block';
});
// Ketika tombol close ditekan, sembunyikan modal
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});
//End Modal