const { Client } = require("discord.js");
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
			if (newMember.voiceChannel.id ==== '531906183758479360') {
				if (!Member.roles.has('483300860424749056') && Member.roles.has('531415833465978890')) {
					client.config.roles.forEach(role => {
						Member.guild.members.filter(m => m.roles.has(role)).forEach(mem => {
							mem.send({
								  embed: {
										color: 0x36393e,
										author: {
											  name: Member.user.username,
											  icon_url: Member.user.displayAvatarURL
										},
										thumbnail: {
											  url: Member.user.displayAvatarURL
										},
										title: "هناك مواطن غير مفعل في غرفة الانتظار",
										fields: [
											  {
													name: "User :",
													value: Member
											  }
										],
										footer: {
											  text: mem.user.tag,
											  icon_url: mem.user.displayAvatarURL
										},
										timestamp: new Date()
								  }
							});
						});
					});
				}
			} else if (newMember.voiceChannel.id ==== '512917281940963328') {
				client.config.roles.forEach(role => {
					  Member.guild.members.filter(m => m.roles.has(role)).forEach(mem => {
							mem.send({
								  embed: {
										color: 0x36393e,
										author: {
											  name: Member.user.username,
											  icon_url: Member.user.displayAvatarURL
										},
										thumbnail: {
											  url: Member.user.displayAvatarURL
										},
										title: "هناك مواطن لديه مشكلة وينتظر احد ليحلها",
										fields: [
											  {
													name: "User :",
													value: Member
											  }
										],
										footer: {
											  text: mem.user.tag,
											  icon_url: mem.user.displayAvatarURL
										},
										timestamp: new Date()
								  }
							});
					  });
				});
			}
      })
      .login(client.config.TOKEN)
