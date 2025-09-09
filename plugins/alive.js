const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions'); // Make sure this path is correct and the function is exported

cmd({
    pattern: "alive",
    alias: ["status", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Ensure 'pushname' is correctly populated from your bot's framework.
        // If 'pushname' is sometimes undefined, you might want to provide a fallback, e.g., 'mek.pushName || "User"'.
        const userPushName = pushname || "මිත්‍රයා"; // Fallback if pushname is not available

        // Generate system status message
        const status = `
┏━━👨‍💻* BOT INFO *🧑‍💻━━┓
┃ 🤖 *Name:* ${config.BOT_NAME}
┃ 👑 *Owner:* ${config.OWNER_NAME}
┃ 🏷️ *Version:* ${config.BOT_VERSION}
┃ ☁️ *Platform:* Heroku
┃ ⏳ *Uptime:* ${hours}h ${minutes}m ${seconds}s
┗━━━━━━━━━━━━━━━━━━┛

🌐 *Website:* Coming Soon...
💌 *Thanks for using ${config.BOT_NAME}!*`.trim();

        const footer = `💠 ${config.BOT_FOOTER} 💠`;

        await socket.sendMessage(sender, {
            image: { url: config.BUTTON_IMAGES.ALIVE },
            caption: formatMessage(title, content, footer),
            buttons: [
                { buttonId: `${config.PREFIX}menu`, buttonText: { displayText: 'MENU' }, type: 1 },
                { buttonId: `${config.PREFIX}ping`, buttonText: { displayText: 'PING' }, type: 1 }
            ],
            headerType: 4,
            quoted: msg
        });
    },

                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
