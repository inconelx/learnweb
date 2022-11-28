function index_select(){
    document.cookie = "select=1";
    let obj = document.getElementsByClassName("elems");
    for(let i = 0 ; i < obj.length; ++i){
        obj[i].onclick = () =>{
            let dc = "select=" + (i+1);
            document.cookie = dc;
            window.location.replace('detail.html');
        }
    }
}
index_select();
