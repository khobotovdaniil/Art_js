const closeModals = () => {
    const modals = document.querySelectorAll('[data-modal]');

    modals.forEach((item) => {
        item.style.display = 'none';
        document.body.style.overflow = "";
    });
};

export default closeModals;