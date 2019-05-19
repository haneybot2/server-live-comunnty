const { Client, RichEmbed } = require("discord.js");
const client = new Client();
client.config = {
      TOKEN: process.env.TOKEN,
      prefix: "!",
      roles: ['531930530015608836', '531930530925772811', '531933725664084018', '531930142478565376', '532215364617109514', '532215366366265355', '532215369650274314', '515528767272386561']
}

client.on("ready", () => {
      console.log("ready man");
      console.log(`${client.user.tag} (${client.user.id})`);
})
      .on("voiceStateUpdate", (oldMember, newMember) => {
            const Member = (oldMember || newMember);
			if (newMember.voiceChannel.id === '531906183758479360') {
				if (!newMember.roles.has('483300860424749056') && newMember.roles.has('531415833465978890')) {
					client.config.roles.forEach(role => {
						newMember.guild.members.filter(m => m.roles.has(role)).forEach(mem => {
							const embed = new RichEmbed()
								.setColor(0x36393e)
								.setAuthor(newMember.user.username, newMember.user.displayAvatarURL)
								.setThumbnail(newMember.user.displayAvatarURL)
								.setTitle("هناك مواطن غير مفعل في غرفة الانتظار")
								.addField("User :", newMember.usr)
								.setFooter(mem.user.tag, mem.user.displayAvatarURL)
								.setTimestamp()
							mem.send(embed);
						});
					});
				}
			} else if (newMember.voiceChannel.id === '512917281940963328') {
				client.config.roles.forEach(role => {
					  newMember.guild.members.filter(m => m.roles.has(role)).forEach(mem => {
						  const embed = new RichEmbed()
								.setColor(0x36393e)
								.setAuthor(newMember.user.username, newMember.user.displayAvatarURL)
								.setThumbnail(newMember.user.displayAvatarURL)
								.setTitle("هناك مواطن لديه مشكلة وينتظر احد ليحلها")
								.addField("User :", newMember.usr)
								.setFooter(mem.user.tag, mem.user.displayAvatarURL)
								.setTimestamp()
							mem.send(embed);
					  });
				});
			}
      })
      .login(client.config.TOKEN)
