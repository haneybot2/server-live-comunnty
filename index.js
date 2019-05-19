const { Client } = require("discord.js");
const client = new Client();
client.config = {
      TOKEN: process.env.TOKEN,
      prefix: "!",
      roles: [],
      channels: {
            
      }
}
client.on("ready", () => {
      console.log("ready man");
      console.log(`${client.user.tag} (${client.user.id})`);
})
      .on("message", async message => {
            if (message.author.bot) return;
            if (message.channel.type === "dm") return;
            const prefixa = "";
            const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            const argsa = message.content.slice(prefixa.length).trim().split(/ +/g);
            const commanda = argsa.shift().toLowerCase();

            if (commanda === "رابط" || command === "رابط" || command === "link") {
                  message.channel.createInvite({
                        thing: true,
                        maxUses: 5,
                        maxAge: 86400
                  }).then(link => {
                        try {
                              message.channel.send("**:link:  تم ارسال الرابط على الخاص  **");
                              message.author.send(`**مدة الرابط : يوم واحد\nعدد استخدامات الرابط : 10**\n${message.author}\n\n***link:***\n${link.url}`);
                        } catch (error) {
                              message.channel.send("**اعتذر منك , ولكن اعدادات الخصوصية لديك تمنعني من ارسال الرابط لك**");
                        }
                  });
            }
      })
      .on("voiceStateUpdate", (oldMember, newMember) => {
            const Member = (oldMember || newMember);
            if (Member.roles.has('483300860424749056')) {
                  if (newMember.voiceChannel.id ==== '') {
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
            }
      })
      .on("voiceStateUpdate", (oldMember, newMember) => {
            const channel = oldMember.guild.channels.get(client.config.voiceOnline);
            const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
            const size = channel.name.match(/\[\s(\d+)\s\]/);
            if (!size || currentSize !== size) channel.setName(`Voice ᎢᎡ [${currentSize}]`);
      
            const voice = oldMember.guild.channels.get("531906183758479360");
            const role0 = oldMember.guild.roles.get("531415833465978890");
            const member = 
            if (
                  newMember.voiceChannelID === voice.id
                  && !(oldMember || newMember).serverMute
                  && !(oldMember || newMember).serverDeaf
            ) {
                  if (oldMember.guild.roles.has(role0.id)) {
                        newMember.guild.members.filter(m => m.roles.get("515528767272386561")).forEach(member => member.send({
                              embed: {
                                    color: 0x36393e,
                                    author: {
                                          name: member.user.username,
                                          icon_url: member.user.displayAvatarURL
                                    },
                                    thumbnail: {
                                          url: oldMember.user.displayAvatarURL
                                    },
                                    title: "هناك مواطن غير مفعل في غرفة الانتظار",
                                    fields: [
                                          {
                                                name: "User :",
                                                value: `<@${oldMember.id}>`
                                          }
                                    ],
                                    footer: {
                                          text: oldMember.user.tag,
                                          icon_url: oldMember.user.displayAvatarURL
                                    },
                                    timestamp: new Date()
                              }
                        }));
                  }
            }
      })
      .login(client.config.TOKEN)
