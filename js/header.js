window.onload = () =>{
    $.get("/template/header.tpl", (r) => {
        $("header").html(r);
    })
}