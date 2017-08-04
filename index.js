// let navibar = document.getElementsByClassName('navi');
// navibar = [].slice.call(navibar);
// let icons = {
//   'home': '<i class="fa fa-home" aria-hidden="true"></i>',
//   'about': '<i class="fa fa-user-circle-o" aria-hidden="true"></i>',
//   'projects': '<i class="fa fa-code" aria-hidden="true"></i>',
//   'contact': '<i class="fa fa-envelope-open-o" aria-hidden="true"></i>'
// }
//
//
//
// navibar.forEach(function(e){
//   console.log(e);
//   e.onMouseOver = function() {
//     for(var i in icons){
//       console.log(i);
//       if(e.hasClassName(i)){
//         e.innerHTML = icons[i];
//       }
//     }
//   }
// });

//////////////////////////////

let toggleNavi = function(){
  if ($('.navibar').hasClass('hidden')){
    $('.navibar').removeClass('hidden');
  } else {
    $('.navibar').addClass('hidden');
  }
}

$('#toggle-button').on('click', toggleNavi);

let checkWidth = function(){
  if($(window).width() >= 700){
    $('.navibar').removeClass('hidden');
    let homebottom = 1/2*($('#home').offset().top + $('#home').height());
    $(window).on('scroll',function(){
     // we round here to reduce a little workload
        let stop = Math.round($(window).scrollTop());
        if (stop > homebottom) {
          if(!$('.navibar').hasClass('navi-scroll')){
            $('.navibar').addClass('navi-scroll');
          }
        } else {
            $('.navibar').removeClass('navi-scroll');
        }
    });
  }
  if($(window).width() < 700){
    $('.navi-elem').on('click', toggleNavi);
  }
}




    $(window).resize(checkWidth);
    checkWidth();
