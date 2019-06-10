const { Client, RichEmbed } = require("discord.js");
const client = new Client();
client.config = {
      TOKEN: process.env.TOKEN,
      prefix: "!",
      roles: ['531930530015608836', '531930530925772811', '531933725664084018', '531930142478565376', '532215364617109514', '532215366366265355', '532215369650274314', '515528767272386561']
}
const index = new Set();
const index2 = new Set();
client.on("ready", () => {
      console.log("ready man");
      console.log(`${client.user.tag} (${client.user.id})`);
      console.log(`guild: ${client.guilds.get('446742886164332547').members.get('532571520002818052').permissions}`);
})
      .on("voiceStateUpdate", (oldMember, newMember) => {
            const Member = (oldMember || newMember);
			if (newMember.voiceChannelID === '531906183758479360') {
				if (!newMember.roles.has('483300860424749056') && newMember.roles.has('531415833465978890')) {
					client.config.roles.forEach(role => {
						newMember.guild.members.filter(m => m.roles.has(role)).forEach(async mem => {
							if (!index.has(mem)) {
								const embed = new RichEmbed()
									.setColor(0x36393e)
									.setAuthor(newMember.user.username, newMember.user.displayAvatarURL)
									.setThumbnail(newMember.user.displayAvatarURL)
									.setTitle("هناك مواطن غير مفعل في غرفة الانتظار")
									.addField("User :", newMember.user)
									.setFooter(mem.user.tag, mem.user.displayAvatarURL)
									.setTimestamp()
								mem.send(embed);
								await index.add(mem);
							}
						});
					});
					index.clear();
				}
			} else if (newMember.voiceChannelID === '512917281940963328') {
				client.config.roles.forEach(role => {
					  newMember.guild.members.filter(m => m.roles.has(role)).forEach(async mem => {
						  if (!index2.has(mem)) {
							  const embed = new RichEmbed()
									.setColor(0x36393e)
									.setAuthor(newMember.user.username, newMember.user.displayAvatarURL)
									.setThumbnail(newMember.user.displayAvatarURL)
									.setTitle("هناك مواطن يريد حل المشكلة")
									.addField("User :", newMember.user)
									.setFooter(mem.user.tag, mem.user.displayAvatarURL)
									.setTimestamp()
							mem.send(embed);
							  await index2.add(mem);
						  }
					  });					
				});
				index2.clear();
			}
      })
      .login(client.config.TOKEN)
