jQuery(window).scroll(startCounter)

function startCounter () {
  const hT = jQuery('.love_counter').offset().top
  const hH = jQuery('.love_counter').outerHeight()
  const wH = jQuery(window).height()
  if (jQuery(window).scrollTop() > hT + hH - wH) {
    jQuery(window).off('scroll', startCounter)
    jQuery('.love_count').each(function () {
      const $this = jQuery(this)
      jQuery({
        Counter: 0
      }).animate({
        Counter: $this.text()
      }, {
        duration: 2000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter) + '+')
        }
      })
    })
  }
}
