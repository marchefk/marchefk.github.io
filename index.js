let navibar = document.getElementsByClassName('navi');
navibar = [].slice.call(navibar);
let icons = {
  'home': '<i class="fa fa-home" aria-hidden="true"></i>',
  'about': '<i class="fa fa-user-circle-o" aria-hidden="true"></i>',
  'projects': '<i class="fa fa-code" aria-hidden="true"></i>',
  'contact': '<i class="fa fa-envelope-open-o" aria-hidden="true"></i>'
}

let homebottom = 1/2*($('#home').offset().top + $('#home').height());
$(window).on('scroll',function(){

 // we round here to reduce a little workload
    let stop = Math.round($(window).scrollTop());
    if (stop > homebottom) {
        $('.navibar').removeClass('homenavi');
    } else {
        $('.navibar').addClass('homenavi');
    }

});


navibar.forEach(function(e){
  console.log(e);
  e.onMouseOver = function() {
    for(var i in icons){
      console.log(i);
      if(e.hasClassName(i)){
        e.innerHTML = icons[i];
      }
    }
  }
});
