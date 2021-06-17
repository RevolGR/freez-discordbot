const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = 'bot.';
const token = process.env.TOKEN;

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('FreeZ BOT Made by Revol');
});
bot.on('message', message => {
    if (message.content === 'bot.check') message.reply('Bot Working');
    if (message.content === 'bot.error') message.channel.send('<@221029766235553792> boss if u could assist me please!').then(r => {
        bot.users.cache.get("221029766235553792").send("Error on FreeZ Community");
    })
    
    if (message.content === 'bot.avatar') {
      message.channel.send(`**This is your avi:**`)
      let targetMember;
      targetMember = message.author;

      let avatarEmbed = new Discord.MessageEmbed()
          .setImage(targetMember.displayAvatarURL())
          .setColor(targetMember.displayHexColor)
          message.channel.send(avatarEmbed)
    };
});
bot.on('message', message => {
        let command = message.content.split(' ')[0].slice(1);
        // Command handler, seen previously
        switch (command) {
                case 'bot.forwardfreestyler': {
                  message.channel.send('Hey Mr. <@&485926538056040483> \n'
                  +'💠The BOT will now forward the recruit to applications.\n'
                                + '⚠️Confirm with a thumb up or deny with a thumb down.');
      
                        // Reacts so the user only have to click the emojis
                        message.react('👍').then(r => {
                                message.react('👎');
                        });
      
                        // First argument is a filter function
                      message.awaitReactions((reaction,user) => user.id === "221029766235553792"/*Revol*/|| user.id === "237618938421182464"/*Knosse*/|| user.id === "402058169146277891"/*Kron*/|| user.id === "239015490318499843"/*Petee*/|| user.id === "266636371005800449"/*Misc*/ || user.id === "290814916070211585"/*Realyy*/ || user.id === "293019630371471360"/*Kalyn*/ || user.id === "277543688089894912"/*HB*/ || user.id === "729819962239352972"/*Dare*/ || user.id === "418446715734065152"/*Friz*/ || user.id === "483243079969669122"/*ae*/ || user.id === "349244484229267456" /*WOLF*/ && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                                { max: 1 }).then(collected => {
                                        if (collected.first().emoji.name == '👍') {
                                                message.channel.send('➡️Redirecting...');
                                                bot.channels.cache.get("833330436939579392").send(`New Freestyler application approved by an administrator!`);                                         
                                                bot.channels.cache.get("833330436939579392").send(message.embeds);
                                                bot.channels.cache.get("833330436939579392").send(`Vote here`);
                                                bot.channels.cache.get("833330436939579392").send(`<@&399248168358772759> New freestyler application approved please vote : )`);
                                        } else
                                                message.channel.send('❌Redirection canceled.');
                                }).catch(() => {
                                        message.channel.send('❌There has been an error');
                                });
      
                        break;
                }
                case 'bot.forwardcompetitive': {
                      message.channel.send('Hey Mr. <@&484404972163694608> \n'
                      +'💠The BOT will now forward the recruit to applications.\n'
                                    + '⚠️Confirm with a thumb up or deny with a thumb down.');
          
                            // Reacts so the user only have to click the emojis
                            message.react('👍').then(r => {
                                    message.react('👎');
                            });
                        
                            // First argument is a filter function
                      message.awaitReactions((reaction,user) => user.id === "221029766235553792"/*Revol*/|| user.id === "237618938421182464"/*Knosse*/|| user.id === "402058169146277891"/*Kron*/|| user.id === "239015490318499843"/*Petee*/|| user.id === "266636371005800449"/*Misc*/ || user.id === "290814916070211585"/*Realyy*/ || user.id === "293019630371471360"/*Kalyn*/ || user.id === "277543688089894912"/*HB*/ || user.id === "729819962239352972"/*Dare*/ || user.id === "418446715734065152"/*Friz*/ || user.id === "483243079969669122"/*ae*/ || user.id === "349244484229267456" /*WOLF*/ && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                                    { max: 1 }).then(collected => {
                                            if (collected.first().emoji.name == '👍') {
                                                    message.channel.send('➡️Redirecting...');
                                                    bot.channels.cache.get("699255039293784176").send(`New Competitive Player application approved by an administrator!`);                                         
                                                    bot.channels.cache.get("699255039293784176").send(message.embeds);
                                                    bot.channels.cache.get("699255039293784176").send(`Vote here`);
                                                    bot.channels.cache.get("699255039293784176").send(`<@&486970762356326401> New Comp application approved please vote : )`);  
                                            } else
                                                    message.channel.send('❌Redirection canceled.');
                                    }).catch(() => {
                                            message.channel.send('❌There has been an error');
                                    });
          
                            break;
                    }   
                    case 'bot.forwardgfx': {
                      message.channel.send('Hey Mr.Lead  <@&824708741605752833> \n'
                      +'💠The BOT will now forward the recruit to applications.\n'
                                    + '⚠️Confirm with a thumb up or deny with a thumb down.');
          
                            // Reacts so the user only have to click the emojis
                            message.react('👍').then(r => {
                                    message.react('👎');
                            });
                            // First argument is a filter function
                      message.awaitReactions((reaction,user) => user.id === "221029766235553792"/*Revol*/|| user.id === "237618938421182464"/*Knosse*/|| user.id === "402058169146277891"/*Kron*/|| user.id === "239015490318499843"/*Petee*/|| user.id === "266636371005800449"/*Misc*/ || user.id === "290814916070211585"/*Realyy*/ || user.id === "293019630371471360"/*Kalyn*/ || user.id === "277543688089894912"/*HB*/ || user.id === "729819962239352972"/*Dare*/ || user.id === "418446715734065152"/*Friz*/ || user.id === "483243079969669122"/*ae*/ || user.id === "349244484229267456" /*WOLF*/ && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                                    { max: 1 }).then(collected => {
                                            if (collected.first().emoji.name == '👍') {
                                                    message.channel.send('➡️Redirecting...');
                                                    bot.channels.cache.get("699255087889121301").send(`New GFX application approved by an administrator!`);                                         
                                                    bot.channels.cache.get("699255087889121301").send(message.embeds);
                                                    bot.channels.cache.get("699255087889121301").send(`Vote here`);
                                                    bot.channels.cache.get("699255087889121301").send(`<@&399247853496696833> New GFX application approved please vote : )`);  
                                            } else
                                                    message.channel.send('❌Redirection canceled.');
                                    }).catch(() => {
                                            message.channel.send('❌There has been an error');
                                    });
          
                            break;
                    }  
                    case 'bot.forwardvfx': {
                      message.channel.send('Hey Mr. <@&454302082833317888> \n'
                      +'💠The BOT will now forward the recruit to applications.\n'
                                    + '⚠️Confirm with a thumb up or deny with a thumb down.');
          
                            // Reacts so the user only have to click the emojis
                            message.react('👍').then(r => {
                                    message.react('👎');
                            });
  
                            // First argument is a filter function
                      message.awaitReactions((reaction,user) => user.id === "221029766235553792"/*Revol*/|| user.id === "237618938421182464"/*Knosse*/|| user.id === "402058169146277891"/*Kron*/|| user.id === "239015490318499843"/*Petee*/|| user.id === "266636371005800449"/*Misc*/ || user.id === "290814916070211585"/*Realyy*/ || user.id === "293019630371471360"/*Kalyn*/ || user.id === "277543688089894912"/*HB*/ || user.id === "729819962239352972"/*Dare*/ || user.id === "418446715734065152"/*Friz*/ || user.id === "483243079969669122"/*ae*/ || user.id === "349244484229267456" /*WOLF*/ && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                                    { max: 1 }).then(collected => {
                                            if (collected.first().emoji.name == '👍') {
                                                    message.channel.send('➡️Redirecting...');
                                                    bot.channels.cache.get("699255171565355078").send(`New VFX application approved by an administrator!`);                                         
                                                    bot.channels.cache.get("699255171565355078").send(message.embeds);
                                                    bot.channels.cache.get("699255171565355078").send(`Vote here`);
                                                    bot.channels.cache.get("699255171565355078").send(`<@&399248019842793482> New VFX application approved please vote : )`);  
                                            } else
                                                    message.channel.send('❌Redirection canceled.');
                                    }).catch(() => {
                                            message.channel.send('❌There has been an error');
                                    });
          
                            break;
                    }
                    case 'bot.forwardnoflip': {
                        message.channel.send('Hey Mr. <@&804053568868057164> \n'
                        +'💠The BOT will now forward the recruit to applications.\n'
                                      + '⚠️Confirm with a thumb up or deny with a thumb down.');
            
                              // Reacts so the user only have to click the emojis
                              message.react('👍').then(r => {
                                      message.react('👎');
                              });
    
                              // First argument is a filter function
                      message.awaitReactions((reaction,user) => user.id === "221029766235553792"/*Revol*/|| user.id === "237618938421182464"/*Knosse*/|| user.id === "402058169146277891"/*Kron*/|| user.id === "239015490318499843"/*Petee*/|| user.id === "266636371005800449"/*Misc*/ || user.id === "290814916070211585"/*Realyy*/ || user.id === "293019630371471360"/*Kalyn*/ || user.id === "277543688089894912"/*HB*/ || user.id === "729819962239352972"/*Dare*/ || user.id === "418446715734065152"/*Friz*/ || user.id === "483243079969669122"/*ae*/ || user.id === "349244484229267456" /*WOLF*/ && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                                      { max: 1 }).then(collected => {
                                              if (collected.first().emoji.name == '👍') {
                                                      message.channel.send('➡️Redirecting...');
                                                      bot.channels.cache.get("833330436939579392").send(`New No Flipper application approved by an administrator!`);                                         
                                                      bot.channels.cache.get("833330436939579392").send(message.embeds);
                                                      bot.channels.cache.get("833330436939579392").send(`Vote here`);
                                                      bot.channels.cache.get("833330436939579392").send(`<@&761330278844727297> New No-Flipper application approved please vote : )`);  
                                              } else
                                                      message.channel.send('❌Redirection canceled.');
                                      }).catch(() => {
                                              message.channel.send('❌There has been an error');
                                      });
            
                              break;
                      }
                    case 'bot.forwardother': {
                      message.channel.send('Hey <@&399251116451168277> \n'
                      +'💠The BOT will now forward the recruit to applications.\n'
                                    + '⚠️Confirm with a thumb up or deny with a thumb down.');
          
                            // Reacts so the user only have to click the emojis
                            message.react('👍').then(r => {
                                    message.react('👎');
                            });
  
          
                            // First argument is a filter function
                      message.awaitReactions((reaction,user) => user.id === "221029766235553792"/*Revol*/|| user.id === "237618938421182464"/*Knosse*/|| user.id === "402058169146277891"/*Kron*/|| user.id === "239015490318499843"/*Petee*/|| user.id === "266636371005800449"/*Misc*/ || user.id === "290814916070211585"/*Realyy*/ || user.id === "293019630371471360"/*Kalyn*/ || user.id === "277543688089894912"/*HB*/ || user.id === "729819962239352972"/*Dare*/ || user.id === "418446715734065152"/*Friz*/ || user.id === "483243079969669122"/*ae*/ || user.id === "349244484229267456" /*WOLF*/ && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                                    { max: 1 }).then(collected => {
                                            if (collected.first().emoji.name == '👍') {
                                                    message.channel.send('➡️Redirecting...');
                                                    bot.channels.cache.get("848204523843354624").send(`New application approved by an administrator!`);                                         
                                                    bot.channels.cache.get("848204523843354624").send(message.embeds);
                                                    bot.channels.cache.get("848204523843354624").send(`Vote here`);
                                                    bot.channels.cache.get("848204523843354624").send(`@everyone New Application approved please vote : )`);  
                                            } else
                                                    message.channel.send('❌Redirection canceled.');
                                    }).catch(() => {
                                            message.channel.send('❌There has been an error');
                                    });
          
                            break;
                    }
        }
      });
      bot.on('message', message => {
      let userdata = message.content.slice('').trim().split(' ');
      let filter = m => m.author.id === message.author.id
      if (message.content.includes('!app.manual')){
        message.channel.send(`🤖 - Starting operation Manual Forward for ${message.author} bleep blop... `);
        message.channel.send('🤖 - Type one of the current roles: `freestyler,competitive,vfx,gfx,other`');
        message.channel.send('⚠️ - Make sure you typed the command correctly should be command + id');
        message.channel.send('⏰ You have 3 minutes, else type `stop` to terminate the Operation.').then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
              })
              .then(message => {
                message = message.first();
                if (message.content.toUpperCase().includes('freestyler'.toUpperCase()) || message.content.toUpperCase().includes('fs'.toUpperCase())) {
                  message.channel.send(`➡️Redirecting...`);
                  message.channel.send(`🤖 - Operation send Manual Forward to Freestylers, Completed!`);
                  let channel = bot.channels.cache.get("839916572260958258")
                  bot.channels.cache.get("833330436939579392").send(`New freestyler application approved by an administrator!`);
                  channel.messages.fetch(`${userdata[1]}`).then(message => {
                          bot.channels.cache.get("833330436939579392").send(message.embeds)      
                  bot.channels.cache.get("833330436939579392").send(`Vote here`);
                  bot.channels.cache.get("833330436939579392").send(`<@&399248168358772759> New freestyler application approved please vote : )`);
                  bot.channels.cache.get("833330436939579392").send(`=======================================================================================`);
                  });
                } else if (message.content.toUpperCase().includes('competitive'.toUpperCase()) || message.content.toUpperCase().includes('comp'.toUpperCase())) {
                    message.channel.send(`➡️Redirecting...`);
                    message.channel.send(`🤖 - Operation send Manual Forward to Competitive, Completed!`);
                    let channel = bot.channels.cache.get("839916572260958258")
                    bot.channels.cache.get("699255039293784176").send(`New competitive application approved by an administrator!`);
                    channel.messages.fetch(`${userdata[1]}`).then(message => {
                            bot.channels.cache.get("699255039293784176").send(message.embeds)      
                    bot.channels.cache.get("699255039293784176").send(`Vote here`);
                    bot.channels.cache.get("699255039293784176").send(`<@&486970762356326401> New Comp application approved please vote : )`);
                    bot.channels.cache.get("699255039293784176").send(`=======================================================================================`);
                    });
                } else if (message.content.toUpperCase().includes('editor'.toUpperCase()) || message.content.toUpperCase().includes('vfx'.toUpperCase())) {
                    message.channel.send(`➡️Redirecting...`);
                    message.channel.send(`🤖 - Operation send Manual Forward to Editor, Completed!`);
                    let channel = bot.channels.cache.get("839916572260958258")
                    bot.channels.cache.get("699255171565355078").send(`New competitive application approved by an administrator!`);
                    channel.messages.fetch(`${userdata[1]}`).then(message => {
                            bot.channels.cache.get("699255171565355078").send(message.embeds)      
                    bot.channels.cache.get("699255171565355078").send(`Vote here`);
                    bot.channels.cache.get("699255171565355078").send(`<@&399248019842793482> New VFX application approved please vote : )`);
                    bot.channels.cache.get("699255171565355078").send(`=======================================================================================`);
                    });
                } else if (message.content.toUpperCase().includes('designer'.toUpperCase()) || message.content.toUpperCase().includes('gfx'.toUpperCase())) {
                    message.channel.send(`➡️Redirecting...`);
                    message.channel.send(`🤖 - Operation send Manual Forward to Designer, Completed!`);
                    let channel = bot.channels.cache.get("839916572260958258")
                    bot.channels.cache.get("699255087889121301").send(`New competitive application approved by an administrator!`);
                    channel.messages.fetch(`${userdata[1]}`).then(message => {
                            bot.channels.cache.get("699255087889121301").send(message.embeds)      
                    bot.channels.cache.get("699255087889121301").send(`Vote here`);
                    bot.channels.cache.get("699255087889121301").send(`<@&399247853496696833> New GFX application approved please vote : )`);
                    bot.channels.cache.get("699255087889121301").send(`=======================================================================================`);
                    });
                } else if (message.content.toUpperCase().includes('stop'.toUpperCase()) || message.content.toUpperCase().includes('cancel'.toUpperCase())) {
                    message.channel.send(`❌Cancelling...`);
                    message.channel.send(`🤖 - Operation has been successfully cancelled!`);
                } else {
                  message.channel.send(`🤖 - Bleep blop there has been an Error you type an incorrect role\n`
                  +"Roles available: `freestylers,competitive,gfx,vfx,other` please try again...")
                }
              })
              .catch(collected => {
                  message.channel.send('🤖 - Time has passed, Operation Cancelled!');
              });
          });  
}
      });
bot.on('message', message => {
        if(message.content === `Vote here`) {
                message.react('530182885106384896').then(r => {
                        message.react('530182853011570718');
                });
        }
});


bot.login(token).catch(err => console.log(err))
