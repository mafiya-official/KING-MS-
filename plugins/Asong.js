const { cmd } = require('../command');
const { ytmp3, ytmp4, tiktok, facebook, instagram, twitter } = require('sadaslk-dlcore');

cmd({
  pattern: "song",
  desc: "Download YouTube song (mp3)",
  category: "download",
  filename: __filename
}, async (conn, mek, m, { args, reply }) => {
  try {
    if (!args[0]) return reply("🔗 Please provide a YouTube URL.");

    const mp3 = await ytmp3(args[0]);
    await conn.sendMessage(m.chat, {
      document: { url: mp3.url },
      mimetype: 'audio/mpeg',
      fileName: mp3.title + ".mp3"
    }, { quoted: mek });
  } catch (e) {
    reply("❌ Error: " + e.message);
  }
});

cmd({
  pattern: "video",
  desc: "Download YouTube video (mp4)",
  category: "download",
  filename: __filename
}, async (conn, mek, m, { args, reply }) => {
  try {
    if (!args[0]) return reply("🔗 Please provide a YouTube URL.");

    const mp4 = await ytmp4(args[0], {
      format: "mp4",
      videoQuality: "720"
    });

    await conn.sendMessage(m.chat, {
      document: { url: mp4.url },
      mimetype: 'video/mp4',
      fileName: mp4.title + ".mp4"
    }, { quoted: mek });
  } catch (e) {
    reply("❌ Error: " + e.message);
  }
});

cmd({
  pattern: "fb",
  desc: "Download Facebook video",
  category: "download",
  filename: __filename
}, async (conn, mek, m, { args, reply }) => {
  try {
    if (!args[0]) return reply("🔗 Please provide a Facebook URL.");

    const fb = await facebook(args[0]);
    await conn.sendMessage(m.chat, {
      video: { url: fb.url },
      caption: fb.title || "Facebook Video"
    }, { quoted: mek });
  } catch (e) {
    reply("❌ Error: " + e.message);
  }
});

cmd({
  pattern: "tt",
  desc: "Download TikTok video",
  category: "download",
  filename: __filename
}, async (conn, mek, m, { args, reply }) => {
  try {
    if (!args[0]) return reply("🔗 Please provide a TikTok URL.");

    const tt = await tiktok(args[0]);
    await conn.sendMessage(m.chat, {
      video: { url: tt.url },
      caption: tt.title || "TikTok Video"
    }, { quoted: mek });
  } catch (e) {
    reply("❌ Error: " + e.message);
  }
});

cmd({
  pattern: "ig",
  desc: "Download Instagram media",
  category: "download",
  filename: __filename
}, async (conn, mek, m, { args, reply }) => {
  try {
    if (!args[0]) return reply("🔗 Please provide an Instagram URL.");

    const ig = await instagram(args[0]);
    await conn.sendMessage(m.chat, {
      video: { url: ig.url },
      caption: ig.title || "Instagram Video"
    }, { quoted: mek });
  } catch (e) {
    reply("❌ Error: " + e.message);
  }
});

cmd({
  pattern: "tw",
  desc: "Download Twitter media",
  category: "download",
  filename: __filename
}, async (conn, mek, m, { args, reply }) => {
  try {
    if (!args[0]) return reply("🔗 Please provide a Twitter URL.");

    const tw = await twitter(args[0]);
    await conn.sendMessage(m.chat, {
      video: { url: tw.url },
      caption: tw.title || "Twitter Video"
    }, { quoted: mek });
  } catch (e) {
    reply("❌ Error: " + e.message);
  }
});
