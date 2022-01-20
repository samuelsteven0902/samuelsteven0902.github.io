// ===== SHOW SCROLL ====
function scrollUp() {
    const scrollUp = document.getElementById('scroll-Up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)


// ==== HOVER =====
const services = document.getElementById('kartu')
$(document).ready(function(e) {
    $('services').on('mouseenter', function(e) {
        x = e.pageX - $this(this).offset().left;
        y = e.pageY - $this(this).offset().top;
        $(this).find('span').css({ top: y, left: x })
    })
})