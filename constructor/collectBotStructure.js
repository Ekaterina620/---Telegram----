"use strict";

function collectBotStructure() {
    const botActions = document.querySelector('.bot-actions');
    const commands = [];

    botActions.querySelectorAll('.command-block').forEach(cmdBlock => {
        const commandTitle = cmdBlock.querySelector('h3').textContent.trim();
        const commandName = commandTitle.replace('Команда: ', '');
        
        const blocks = [];
        cmdBlock.querySelectorAll('.block').forEach(block => {
            const type = block.dataset.type;
            const contentEl = block.querySelector('.block-content');
            let content = contentEl.textContent.trim();

            // Если это кнопки, превращаем строку в массив
            if(type === 'buttons') {
                content = content.split(',').map(btn => btn.trim());
            }

            blocks.push({ type, content });
        });

        commands.push({ command: commandName, blocks });
    });

    return { commands };
}

// // Пример использования:
// const myBotJson = collectBotStructure();
// console.log(myBotJson);

// Для сохранения в файл JSON:
function downloadBotJson(botJson) {
    const blob = new Blob([JSON.stringify(botJson, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-bot.json";
    a.click();
}

// Вызов для сохранения
// downloadBotJson(myBotJson);
