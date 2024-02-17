document.addEventListener("DOMContentLoaded", function() {
    var closeBtn = document.getElementById("menu__close");
    var menuBtn = document.querySelector(".nav__menu");
    var menuIni = document.getElementById("menu__inicio");
    var containerProjects = document.querySelector(".container__projects");
    var ayuda = document.getElementById("ayuda");

    ayuda.addEventListener("click", function() {
    alert("¡Bienvenido a mi página web, donde podrás toda la información sobre mí! SI deseas volver al inicio pulsa el botón (inicio) situado en el menú.");
    });

    menuBtn.addEventListener("click", function() {
        // Ocultar el contenedor de proyectos al hacer clic en el botón del menú
        containerProjects.style.display = "none";
    });

    closeBtn.addEventListener("click", function(){
        containerProjects.style.display = "flex";
    });

    menuIni.addEventListener("click", function(){
        containerProjects.style.display = "flex";
    });
});
