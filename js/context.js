const contextMenu = document.querySelector(".wrapper"),
            shareMenu = contextMenu.querySelector(".share-menu");

        window.addEventListener("contextmenu", e => {
            e.preventDefault();
            let x = e.offsetX, y = e.offsetY,
                winWidth = window.innerWidth,
                winHeight = window.innerHeight,
                cmWidth = contextMenu.offsetWidth,
                cmHeight = contextMenu.offsetHeight;

            if (x > (winWidth - cmWidth - shareMenu.offsetWidth)) {
                shareMenu.style.left = "-200px";
            } else {
                shareMenu.style.left = "";
                shareMenu.style.right = "-200px";
            }

            x = x > winWidth - cmWidth ? winWidth - cmWidth - 5 : x;
            y = y > winHeight - cmHeight ? winHeight - cmHeight - 5 : y;

            contextMenu.style.left = `${x}px`;
            contextMenu.style.top = `${y}px`;
            contextMenu.style.visibility = "visible";
        });

        document.addEventListener("click", () => contextMenu.style.visibility = "hidden");
