document.addEventListener('DOMContentLoaded', function () {
    // Get all accordion items
    const allItems = document.querySelectorAll('header .gb-accordion__item');

    // Function to close all other accordion items
    function closeOtherAccordionItems() {
        allItems.forEach(item => {
            item.classList.remove('gb-accordion__item-open');
            let toggle = item.querySelector('.gb-accordion__toggle');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.classList.remove('gb-block-is-current');
        });
    }

    // Close on escape key press
    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") {
            closeOtherAccordionItems();
        }
    });
    // Close accordion if clicked outside gb-accordion
    document.addEventListener('click', function (event) {
        // Close accordion if clicked outside gb-accordion
        if (!event.target.closest('.gb-accordion')) {
            closeOtherAccordionItems();
        }
    });

    // Close accordion if clicked on overlay
    document.querySelectorAll('.navigation-overlay').forEach(overlay => {
        overlay.addEventListener('click', event => {
            if (event.target === overlay) {
                closeOtherAccordionItems();
            }
        });
    });

    // Prevent the initial click on the active accordion item
    document.querySelectorAll('.gb-accordion__item').forEach(item => {
        const toggle = item.querySelector('.gb-accordion__toggle');
        toggle.addEventListener('click', function (event) {
            // Prevent the link click
            if (item.classList.contains('gb-accordion__item-open')) {
                event.preventDefault();
            }
        });
    });
});