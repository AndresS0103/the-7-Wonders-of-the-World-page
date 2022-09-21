function openWonder(evt, wonderName){
    let i, pestanaContent, pestanaLinks;

    pestanaContent = document.getElementsByClassName("pestanaContent");

    //Hace que ninguna pestana este seleccionada
    for(i = 0; i < pestanaContent.length; i++){
        pestanaContent[i].getElementsByClassName.display = 'none';
    }

    pestanaLinks = document.getElementsByClassName("pestanalinks");
    for(i = 0; i < pestanaContent,length; i++){
        pestanaLinks[i].className = pestanaLinks[i].className.replace("active", "");
    }

    document.getElementById(wonderName).style.display = "block";
    evt.currentTarget.className += "active";
}