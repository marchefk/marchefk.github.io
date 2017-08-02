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

$('#toggle-button').on('click', function(){
  if ($('.navibar').css('display') == 'none'){
    $('.navibar').css('display', 'flex');
  } else {
    $('.navibar').css('display', 'none');
    console.log('yes');
  }
});


let checkWidth = function(){
  if($(window).width() >= 992){
    $('.vertical').addClass('vertical-text');
  }else{
    $('.vertical').removeClass('vertical-text');
  }
}



$(document).ready( function() {
    $(window).resize(checkWidth);
    checkWidth();
});
