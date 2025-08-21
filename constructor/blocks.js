"use strict";

// Функция для создания разных блоков
function createBlock(type, content) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.dataset.type = type;

    switch(type) {
        case "text":
            block.innerHTML = `
                <div class="block-header"><strong>Текст</strong></div>
                <div class="block-content" contenteditable="true">${content || "Введите текст..."}</div>
            `;
            break;

        case "media":
            block.innerHTML = `
                <div class="block-header"><strong>Медиа</strong></div>
                <div class="block-content">${content || "📷 (изображение/видео)"}</div>
            `;
            break;

        case "quiz":
            block.innerHTML = `
                <div class="block-header"><strong>Опрос / Квиз</strong></div>
                <div class="block-content" contenteditable="true">${content || "Вопрос с вариантами ответа"}</div>
            `;
            break;

        case "buttons":
            block.innerHTML = `
                <div class="block-header"><strong>Кнопки</strong></div>
                <div class="block-content" contenteditable="true">${content || "Кнопка 1 | Кнопка 2"}</div>
            `;
            break;

        default:
            block.textContent = content || "Неизвестный блок";
    }

    return block;
}