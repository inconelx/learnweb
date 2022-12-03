$.get("/learnweb/template/detail_info.tpl", function(result){
    var cookies = document.cookie.split(";");
    let i = 0;
    for(; i < cookies.length; ++i){
        var dc = cookies[i].split("=");
        if(dc[0]=="select" || dc[0]==" select"){
            var html = ejs.compile(result)(JSON.parse(localStorage.getItem("post"+dc[1])));
            $("main").html(html);
            break;
        }
    }

    $(function() {
        $("#slider").easySlider( {
            slideSpeed: 500,
            paginationSpacing: "15px",
            paginationDiameter: "12px",
            paginationPositionFromBottom: "20px",
            slidesClass: ".slides",
            controlsClass: ".controls",
            paginationClass: ".pagination"
        });
    });
});
    
    
