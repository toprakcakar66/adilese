const rpc = require("discord-rpc");

//Yarattığınız app'in client idsi
const ClientId = '464455859741786123';

rpc.register(ClientId);

const ana = new rpc.Client({ transport: 'ipc' });



//Ana kısım
ana.on('ready', () => {
  console.log("Custom RPC: Connected");
  ana.setActivity({
    details: 'Youtube',//Ana yazı
    state: 'Abone OL',//Ana yazı altındaki yazı
    largeImageKey: 'toprakk',//Large fotoğraf
    largeImageText: 'https://www.youtube.com/channel/UC5DfzSsEoihEa2r7VTfOddQ',//İmleç ile üstüne gelindiğinde çıkacak olan yazı
    smallImageKey: 'toprak',//Small fotoğraf
    smallImageText: 'Büyük yerden abone ol ha'//İmleç ile üstüne gelindiğinde çıkacak olan yazı
  });
});


ana.login(ClientId).catch(console.error);
