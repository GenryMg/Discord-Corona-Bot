const Discord = require('discord.js');
const Client = new Discord.Client();
const Request = require('request');

const Token = '';

const Prefix = '';

const Api = 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22confirmed%22%7D%2C%20%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Deaths%22%2C%22outStatisticFieldName%22%3A%22deaths%22%7D%2C%20%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Recovered%22%2C%22outStatisticFieldName%22%3A%22recovered%22%7D%5D';

Client.on('ready', () => {
    console.log('Ready!');
})

Client.on('message', message => {
    if (message.author.bot) return
    if (!message.content.includes(Prefix)) return
    let args = message.content.substring(Prefix.length).split(' ');
    switch (args[0]) {
        case 'corona':
            Request({
                url: Api,
                method: 'GET',
                json: true,
                gzip: true,
            }, (err, res, body) => {
                var stats = {
                    confirmed: 0,
                    deaths: 0,
                    recovered: 0
                };
                body.features.forEach(obj => {
                    stats.recovered += obj.attributes.recovered;
                    stats.confirmed += obj.attributes.confirmed;
                    stats.deaths += obj.attributes.deaths;
                });
                const StatsEmbed = new Discord.RichEmbed()
                    .setColor('#346beb')
                    .setTitle('Current Corona Virus Statistics')
                    .addField(':white_check_mark: Confirmed:', stats.confirmed)
                    .addField(':skull: Deaths:', stats.deaths)
                    .addField(':repeat: Recovered:', stats.recovered)
                    .setFooter(new Date(Date.now))
                message.channel.send(StatsEmbed);
            })
            break;
    }
})

Client.login(Token);