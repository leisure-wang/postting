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
