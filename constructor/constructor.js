"use strict";

import { templates } from './templates.js';

document.addEventListener("DOMContentLoaded", () => {
    const selectedBot = sessionStorage.getItem("selectedBot");
    const botStructureDiv = document.querySelector(".bot-actions");

    if (selectedBot && templates[selectedBot]) {
        templates[selectedBot].forEach(commandObj => {
            
            const commandWrapper = document.createElement('div');
            commandWrapper.classList.add('command-block');

            const commandTitle = document.createElement('h3');
            commandTitle.textContent = `Команда: ${commandObj.command}`;
            commandWrapper.appendChild(commandTitle);

            commandObj.blocks.forEach(block => {
                const blockDiv = createBlock(block.type, block.content);
                commandWrapper.appendChild(blockDiv);
            });

            botStructureDiv.appendChild(commandWrapper);
        });
    }
});

let botProject = {};

const tokenInput = document.querySelector('.entering-token_btn');
const sendBtn = document.getElementById('send-token-btn');

sendBtn.addEventListener('click', () => {
    const token = tokenInput.value.trim();
    if (!token) {
        alert('Введите токен!');
        return;
    }

    const botJson = collectBotStructure();

    botJson.token = token;

    botProject = botJson;
});
