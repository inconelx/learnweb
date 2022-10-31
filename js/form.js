function addbrief(){
    let obj = document.getElementById("detailbrief");
    let button = obj.querySelector("button");
    button.onclick = () => {
        let fieldset = document.createElement("fieldset");
        let textarea = document.createElement("textarea");
        let legend = document.createElement("legend");
        let childs = obj.querySelectorAll("fieldset");
        fieldset.style="display: flex";
        legend.textContent = "段落" + (childs.length + 1);
        let button = document.createElement("button");
        button.type = "button";
        button.textContent = "移除";
        button.onclick = () => {
            obj.removeChild(fieldset);
            let childx = obj.querySelectorAll("fieldset");
            for(let i = 0; i < childx.length; ++i){
                let child_legend = childx[i].querySelector("legend");
                child_legend.textContent = "段落" + (i+1);
            }
        }
        fieldset.appendChild(legend);
        fieldset.appendChild(textarea);
        fieldset.appendChild(button);
        obj.appendChild(fieldset);
    }
}
function addimg(){
    let obj = document.getElementById("detailimage");
    let button = obj.querySelector("button");
    let upimgs = obj.querySelector("div");
    button.onclick = () => {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        let childs = upimgs.querySelectorAll("fieldset");
        legend.textContent = "图片" + (childs.length + 1);
        fieldset.style="width:92%;display: flex;flex-direction: column";
        let button = document.createElement("button");
        button.style="margin-top:1%;width:52px;height:40px";
        button.type = "button";
        button.textContent = "移除";
        button.onclick = () => {
            upimgs.removeChild(fieldset);
            let childx = upimgs.querySelectorAll("fieldset");
            for(let i = 0; i < childx.length; ++i){
                let child_legend = childx[i].querySelector("legend");
                child_legend.textContent = "图片" + (i+1);
            }
        }
        fieldset.appendChild(legend);
        let img = document.createElement("img");
        img.className = "upload_img"
        let img_upload = document.createElement("input");
        img_upload.style="margin-top:1%;";
        img_upload.type = "file";
        img_upload.accept = "image/*"
        img_upload.onchange = ()=> {
            console.log(img_upload);
            if(img_upload.files.length){
                let file = img_upload.files[0];
                let reader = new FileReader();
                reader.onload = function(){
                    img.src = this.result;
                };
                reader.readAsDataURL(file);
                }                
        }
        fieldset.appendChild(img);
        fieldset.appendChild(img_upload);
        fieldset.appendChild(button);
        upimgs.appendChild(fieldset);
    }
}
addbrief();
addimg();