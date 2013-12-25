!function ($) {

  $(function(){

    var $window = $(window)

    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh')
    });

    $("#toc").tableOfContents(
        id="#toc-top",  // scoping default: null
      {
        startLevel:           1,   // H1
        depth:                2,   // H1 through H2
        topLinks:             true // add top links to each header
      }
    ); 

    // side bar stationary

    setTimeout(function () {
      $('#toc').affix({ /*
        offset: {
          top: function () { return $window.width() <= 980 ? 290 : 210 }
        , bottom: 270
        } */
      })
    }, 100)

  })

}(window.jQuery)

