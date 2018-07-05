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
  let joinRole = guild.roles.find('name', 'Üye'); // Burada girişte verilcek rolu seçelim.
  member.addRole(joinRole); // seçtiğimiz rolu verelim.

  const channel = member.guild.channels.find('name', 'hosgeldin'); // burda ise kanalı belirleyelim hangi kanala atsın ben mod-log dedim.
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('MOLA VAKTİ Ailesine Hoşgeldin Güzel Kardeşim')
  .setTimestamp()
  channel.sendEmbed(embed); // belirlediğimiz kanala mesaj gönderelim.
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam!');
  }
    if (msg.content.toLowerCase() === prefix + 'yayın') {
    msg.channel.sendMessage('@everyone https://www.youtube.com/watch?v=yUtdfXQS0LE');
  }
    if (msg.content.toLowerCase() === prefix + 'kurallar') {
    msg.channel.sendMessage('Discord Kuralları @everyone \nSpam Kesinlikle YASAKTIR```1-Profilinizde isim ve yaş zorunludur ve nickinizin başında Sembol YASAKTIR.\n2-Chatte ve Konuşma Kanallarında her türlü spam,troll ve küfür yasaktır.\n3-Chatten veya özelden item istemek (bana item atabilirmisiniz) yasaktır.\n4-Küfür, Link, Irkçılık, Din, Spam, Flood, Siyaset ve 3.Şahıs Hakkında Konuşmak Kesinlikle Yasaktır!```Bunlara uymayanlar ilk önce uyarılır. Uyarıyı dikkate almayanlar veya kuralları çiğneyenler\nSüresiz olarak BANLANIR.');
  }  
    if (msg.content.toLowerCase() === prefix + '155') {
    msg.reply('Bir Olaymi Oldu? Polisle Konusun ```@Discord Mod\n@Moderasyon Ekibi \n@YONETICI \n@Dc Mod Lideri```');
  }
});

client.login('NDYyMjExMzIxNzQ4NzgzMTE1.DhejXA.RXomOSzMuJb6o1SjSwiTRGXXKgY');
