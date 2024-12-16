    let lastScroll = 0;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 50) {
            // Rolando para baixo e fora do topo
            header.style.top = "-100px"; // Esconde o header
        } else {
            // Rolando para cima ou parando
            header.style.top = "0"; // Mostra o header
        }

        lastScroll = currentScroll;
    });

    document.querySelector(".menu-toggle").addEventListener("click", function () {
        const menu = document.querySelector(".menu");
        menu.classList.toggle("open");
    });
    
