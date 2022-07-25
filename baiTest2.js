let category = document.querySelectorAll(".category");

let dropAll = function (drop){
    let content = document.querySelectorAll(drop);
    content.forEach((element)=>{
        element.style.display="none";
        element.parentElement.querySelector('i').setAttribute('class',"fa-solid fa-plus");
    })
}

let dropdown = function (e) {
    let btn = e.target.closest('.more');
    if (btn) {
        let icon = btn.querySelector(".fa-plus");
        let content = btn.parentElement.parentElement.parentElement.querySelector('.content');
        console.log(icon)
        if(icon){
            dropAll('.content')
            content.setAttribute('style','display:block');
            icon.setAttribute('class',"fa-solid fa-minus")
        }
        else{
            content.setAttribute('style','display:none');
            icon = btn.querySelector(".fa-minus");
            icon.setAttribute('class',"fa-solid fa-plus")
        }
    }
}


category.forEach((element) => {
    element.onclick = dropdown;
})

