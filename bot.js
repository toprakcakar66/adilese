const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "m!";
var owner = "427061793123205131";

client.on('ready', () => {
  client.user.setGame(`ABONE OL`);
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'MOLACI'); // Burada girişte verilcek rolu seçelim.
  member.addRole(joinRole); // seçtiğimiz rolu verelim.

  const channel = member.guild.channels.find('name', 'hosgeldin'); // burda ise kanalı belirleyelim hangi kanala atsın ben mod-log dedim.
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('Mola Vakti Ailesine|HOŞGELDİN')
  .setTimestamp()
  channel.sendEmbed(embed); // belirlediğimiz kanala mesaj gönderelim.
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam!');
  }
    if (msg.content.toLowerCase() === prefix + 'yayın') {
    msg.reply('https://www.youtube.com/watch?v=InOdAt0v49Q');
  }
    if (msg.content.toLowerCase() === prefix + '155') {
    msg.reply('Bir Olaymi Oldu? Polisle Konusun ```@Discord Mod\n@Moderasyon Ekibi \n@YONETICI \n@Dc Mod Lideri```');
  }
});

client.login('NDYyMjExMzIxNzQ4NzgzMTE1.DhejXA.RXomOSzMuJb6o1SjSwiTRGXXKgY');
