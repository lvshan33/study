$(function(){
     hotTime.init();
});

var hotTime={
    init:function(){
         this.textShow();
    },

    textShow:function(){
        $(".textShow").click(function(){
            if($(".experIntroduce").hasClass("textHide")){
                $(".experIntroduce").removeClass("textHide");
            }else{
                $(".experIntroduce").addClass("textHide");
            }

        })

    }

    //点击

};