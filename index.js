const { Client } = require("discord.js");
const client = new Client();
client.config = require("./config.js");
client.on("ready", () => {
      console.log("ready man");
})
.on("message", async message => {
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

            const voice = oldMember.guild.channels.get("531906183758479360");
            const voiceSupport = oldMember.guild.channels.get("531936102626361376");
            const role0 = oldMember.guild.roles.get("531415833465978890");
            if (newMember.voiceChannelID === voice.id) {
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
                        newMember.guild.members.filter(m => m.roles.get("531930530015608836")).forEach(member => member.send({
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
                        newMember.guild.members.filter(m => m.roles.get("531930530925772811")).forEach(member => member.send({
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
                        newMember.guild.members.filter(m => m.roles.get("531933725664084018")).forEach(member => member.send({
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
                        newMember.guild.members.filter(m => m.roles.get("531930142478565376")).forEach(member => member.send({
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
                        newMember.guild.members.filter(m => m.roles.get("532215364617109514")).forEach(member => member.send({
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
                        newMember.guild.members.filter(m => m.roles.get("532215366366265355")).forEach(member => member.send({
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
                        newMember.guild.members.filter(m => m.roles.get("532215369650274314")).forEach(member => member.send({
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
            } else if (newMember.voiceChannelID === voiceSupport.id) {
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
                                    title: "هناك مواطن في غرفة الدعم الفني يحتاج الى المساعدة",
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
                        newMember.guild.members.filter(m => m.roles.get("531930530015608836")).forEach(member => member.send({
                              embed: {
                                    color: 0x36393e,
                                    author: {
                                          name: member.user.username,
                                          icon_url: member.user.displayAvatarURL
                                    },
                                    thumbnail: {
                                          url: oldMember.user.displayAvatarURL
                                    },
                                    title: "هناك مواطن في غرفة الدعم الفني يحتاج الى المساعدة",
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
                        newMember.guild.members.filter(m => m.roles.get("531930530925772811")).forEach(member => member.send({
                              embed: {
                                    color: 0x36393e,
                                    author: {
                                          name: member.user.username,
                                          icon_url: member.user.displayAvatarURL
                                    },
                                    thumbnail: {
                                          url: oldMember.user.displayAvatarURL
                                    },
                                    title: "هناك مواطن في غرفة الدعم الفني يحتاج الى المساعدة",
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
                        newMember.guild.members.filter(m => m.roles.get("531933725664084018")).forEach(member => member.send({
                              embed: {
                                    color: 0x36393e,
                                    author: {
                                          name: member.user.username,
                                          icon_url: member.user.displayAvatarURL
                                    },
                                    thumbnail: {
                                          url: oldMember.user.displayAvatarURL
                                    },
                                    title: "هناك مواطن في غرفة الدعم الفني يحتاج الى المساعدة",
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
                        newMember.guild.members.filter(m => m.roles.get("531930142478565376")).forEach(member => member.send({
                              embed: {
                                    color: 0x36393e,
                                    author: {
                                          name: member.user.username,
                                          icon_url: member.user.displayAvatarURL
                                    },
                                    thumbnail: {
                                          url: oldMember.user.displayAvatarURL
                                    },
                                    title: "هناك مواطن في غرفة الدعم الفني يحتاج الى المساعدة",
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
                        newMember.guild.members.filter(m => m.roles.get("532215364617109514")).forEach(member => member.send({
                              embed: {
                                    color: 0x36393e,
                                    author: {
                                          name: member.user.username,
                                          icon_url: member.user.displayAvatarURL
                                    },
                                    thumbnail: {
                                          url: oldMember.user.displayAvatarURL
                                    },
                                    title: "هناك مواطن في غرفة الدعم الفني يحتاج الى المساعدة",
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
                        newMember.guild.members.filter(m => m.roles.get("532215366366265355")).forEach(member => member.send({
                              embed: {
                                    color: 0x36393e,
                                    author: {
                                          name: member.user.username,
                                          icon_url: member.user.displayAvatarURL
                                    },
                                    thumbnail: {
                                          url: oldMember.user.displayAvatarURL
                                    },
                                    title: "هناك مواطن في غرفة الدعم الفني يحتاج الى المساعدة",
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
                        newMember.guild.members.filter(m => m.roles.get("532215369650274314")).forEach(member => member.send({
                              embed: {
                                    color: 0x36393e,
                                    author: {
                                          name: member.user.username,
                                          icon_url: member.user.displayAvatarURL
                                    },
                                    thumbnail: {
                                          url: oldMember.user.displayAvatarURL
                                    },
                                    title: "هناك مواطن في غرفة الدعم الفني يحتاج الى المساعدة",
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