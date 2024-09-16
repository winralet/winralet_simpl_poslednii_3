document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем значения полей
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const services = document.getElementById('services').value;
    const backgroundColor = document.getElementById('backgroundColor').value;
    const fontColor = document.getElementById('fontColor').value;
    const headerColor = document.getElementById('headerColor').value;
    const footerColor = document.getElementById('footerColor').value;
    const text = document.getElementById('text').value;

    // Формируем URL для перехода на главную страницу
    const url = `главная.html?name=${encodeURIComponent(name)}&surname=${encodeURIComponent(surname)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&services=${encodeURIComponent(services)}&backgroundColor=${encodeURIComponent(backgroundColor)}&fontColor=${encodeURIComponent(fontColor)}&headerColor=${encodeURIComponent(headerColor)}&footerColor=${encodeURIComponent(footerColor)}   &text=${encodeURIComponent(text)}`;

    window.location.href = url; // Переходим на главную страницу
});