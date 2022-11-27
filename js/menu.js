(() => {
    const menuBtnOpen = document.querySelector("[data-menu-button-open]");
    const menuBtnClose = document.querySelector("[data-menu-button-close]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnOpen.addEventListener("click", () => {
        const expanded = menuBtnOpen.getAttribute("aria-expanded") === "true || false";

        menuBtnOpen.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.add("is-open");
        document.body.classList.add("modal-open");
    })
    menuBtnClose.addEventListener("click", () => {
        const expanded = menuBtnClose.getAttribute("aria-expanded") === "true || false";

        menuBtnClose.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.remove("is-open");
        document.body.classList.add("modal-open");
    })

})();