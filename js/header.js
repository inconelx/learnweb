window.onload = () =>{
    $.get("/learnweb/header.tpl", (r) => {
        $("header").html(r);
    })
}
