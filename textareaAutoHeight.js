//textarea高度自适应，添加属性autoHeight="true"
$(function(){
    $.fn.autoheight = function(){    
        function autoheight(elem){
            elem.style.height = 'auto';
            elem.scrollTop = 0; //防抖动
            elem.style.height = elem.scrollHeight + 'px';
        }
        this.each(function(){
            autoheight(this);
            $(this).on('keyup', function(){
                autoheight(this);
            });
        });     
    }                
    $('textarea[autoheight]').autoheight();    
})
var a = 2,b = 0;
//第二种方法

/*function readyNumber() { 

  $('textarea').each(function () {
     this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  }).on('input', function () {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
  })
}

readyNumber()*/


