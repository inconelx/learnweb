function index_select(){
    let obj = document.getElementsByClassName("elems");
    for(let i = 0 ; i < obj.length; ++i){
        obj[i].onclick = () =>{
            let dc = "select=" + i;
            document.cookie = dc;
            window.location.replace('detail.html');
        }
    }
}
index_select();
