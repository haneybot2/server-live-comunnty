const { Client } = require("discord.js");
const client = new Client();
client.config = require("./config.js");

client.on("message", async message => {
      if (message.author.bot) return;
      if (message.channel.type === "dm") return;
      const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
      command = args.shift().toLowerCase();



})
      .on("voiceStateUpdate", (oldMember, newMember) => {
            const channel = oldMember.guild.channels.get(client.config.voiceOnline);
            const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
            const size = channel.name.match(/\[\s(\d+)\s\]/);
            if (!size || currentSize !== size) channel.setName(`Voice ᎢᎡ [${currentSize}]`);

            const voice = oldMember.guild.channels.get(client.config.channel);
            const role1 = oldMember.guild.roles.get("531930142478565376");
            const role2 = oldMember.guild.roles.get("532215364617109514");
            const role3 = oldMember.guild.roles.get("532215366366265355");
            const role4 = oldMember.guild.roles.get("532215369650274314");
            const role0 = oldMember.guild.roles.get("");
            const userMember = oldMember.guild.filter(m => m.roles.has(""))
            if (newMember.id === voice.id) {
                  oldMember.guild.members.filter(m => m.roles.has(role1)).send(`هناك مواطن في غرفة الدعم الفني يحتاج الى المساعدة`);
                  oldMember.guild.members.filter(m => m.roles.has(role2)).send(`هناك مواطن في غرفة الدعم الفني يحتاج الى المساعدة`);
                  oldMember.guild.members.filter(m => m.roles.has(role3)).send(`هناك مواطن في غرفة الدعم الفني يحتاج الى المساعدة`);
                  oldMember.guild.members.filter(m => m.roles.has(role4)).send(`هناك مواطن في غرفة الدعم الفني يحتاج الى المساعدة`);
            }
      })
      .login(client.config.TOKEN)