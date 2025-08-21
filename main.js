"use strict";

document.getElementById('faq-bot').addEventListener('click', () => {
    sessionStorage.setItem('selectedBot', 'FAQ-бот');
    window.location.href = '/constructor/constructor.html';
});

document.getElementById('quiz-bot').addEventListener('click', () => {
    sessionStorage.setItem('selectedBot', 'Квиз-бот');
    window.location.href = 'constructor/constructor.html';
});

document.getElementById('info-bot').addEventListener('click', () => {
    sessionStorage.setItem('selectedBot', 'Инфо-бот');
    window.location.href = '/constructor/constructor.html';
});