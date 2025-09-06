"use strict";

function generateTelegrafCode(botJson) {
    if (!botJson || !botJson.token || !botJson.commands) {
        console.error('Неверный формат JSON');
        return '';
    }

    let code = `
const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('${botJson.token}');\n
`;

    botJson.commands.forEach(cmd => {
        code += `bot.command('${cmd.command}', async (ctx) => {\n`;

        cmd.blocks.forEach(block => {
            switch (block.type) {
                case 'text':
                    code += `    await ctx.reply(\`${block.content}\`);\n`;
                    break;
                case 'buttons':
                    const buttonsArray = block.content.map(btn => `["${btn}"]`).join(', ');
                    code += `    await ctx.reply('Выберите:', Markup.keyboard([${buttonsArray}]).oneTime().resize());\n`;
                    break;
                // case 'media':
                //     code += `    // Здесь можно вставить отправку медиа\n`;
                //     break;
                // case 'quiz':
                //     code += `    // Здесь можно вставить опрос/квиз\n`;
                //     break;
                // default:
                //     code += `    // Неизвестный тип блока: ${block.type}\n`;
            }
        });

        code += `});\n\n`;
    });

    code += `bot.launch().then(() => console.log('Бот запущен!'));`;

    return code;
}

