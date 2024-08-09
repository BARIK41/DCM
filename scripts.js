document.addEventListener('DOMContentLoaded', function () {
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const extraContent = this.previousElementSibling;
            if (extraContent.style.display === 'none' || !extraContent.style.display) {
                extraContent.style.display = 'block';
                this.textContent = 'Згорнути';
            } else {
                extraContent.style.display = 'none';
                this.textContent = 'Детальніше';
            }
        });
    });
});
