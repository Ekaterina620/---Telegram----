"use strict";

export const templates = {
    "FAQ-бот": [
        {
            command: "/start",
            blocks: [
                { type: "text", content: "Привет! Я FAQ-бот." },
                { type: "text", content: "Чем могу помочь?" },
                { type: "buttons", content: ["Вопросы", "Поддержка"] }
            ]
        },
        {
            command: "/help",
            blocks: [
                { type: "text", content: "Вот список команд..." }
            ]
        }
    ],
    "Квиз-бот": [
        {
            command: "/start",
            blocks: [
                { type: "text", content: "Добро пожаловать в квиз!" },
                { type: "quiz", content: "Выберите уровень сложности" },
                { type: "text", content: "Удачи!" }
            ]
        }
    ],
    "Инфо-бот": [
        {
            command: "/start",
            blocks: [
                { type: "text", content: "Привет! Я Инфо-бот." }
            ]
        },
        {
            command: "/news",
            blocks: [
                { type: "text", content: "Сегодня новости такие-то..." }
            ]
        }
    ]
};