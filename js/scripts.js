const navToggleLabel = document.querySelector('#nav-toggle-label');

const navCheck = getComputedStyle(navToggleLabel);

const menuLinks = document.getElementsByClassName('menu-link');

// Ciclo FOR para agregar el evento onclick a cada enlace del menú
for (var i = 0; i < menuLinks.length; i++) {
	menuLinks[i].onclick = function() {
		// Consultamos por el label del menú; si la propiedad DISPLAY es distinta de "none", cierre la ventana de menú al hacer clic en uno de los enlaces
		if (navCheck.display != 'none') {
			document.getElementById('nav-toggle').checked = false;
		}
	}
}


