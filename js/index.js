document.addEventListener("DOMContentLoaded", function () {
  var scrollButton = document.getElementById("scrollButton");
  var sections = document.querySelectorAll(".section");

  scrollButton.addEventListener("click", function () {
    var currentSectionIndex = getCurrentSectionIndex();

    if (currentSectionIndex < sections.length - 1) {
      sections[currentSectionIndex + 1].scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  document.addEventListener("scroll", function () {
    var currentSectionIndex = getCurrentSectionIndex();

    if (currentSectionIndex === sections.length - 1) {
      scrollButton.querySelector("i").style.transform = "rotate(180deg)";
    } else if (currentSectionIndex === 0) {
      scrollButton.querySelector("i").style.transform = "rotate(0deg)";
    }
  });

  function getCurrentSectionIndex() {
    var windowHeight = window.innerHeight;
    var currentSectionIndex = 0;

    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top >= 0) {
        currentSectionIndex = i;
        break;
      }
    }

    return currentSectionIndex;
  }
});

function copiarvalor() {
  var inputCampo = document.getElementById("inputValor");
  var valor = inputCampo.value;
  navigator.clipboard.writeText(valor);
}

function mostrarAnuncio() {
  var alerta = document.createElement("div");
  alerta.classList.add(
    "alert",
    "position-fixed",
    "bottom-0",
    "start-50",
    "translate-middle-x",
    "mb-3",
    "px-3",
    "py-2",
    "rounded-3",
    "text-white",
    "bg-dark"
  );
  alerta.innerHTML = "¡Copiado con éxito!";
  document.body.appendChild(alerta);
  setTimeout(function () {
    alerta.remove();
  }, 3000);
}

$(document).ready(function () {
  $("#hamburguer-btn").click(function () {
    $(".hidden-on-mobile").slideToggle();
  });
});
