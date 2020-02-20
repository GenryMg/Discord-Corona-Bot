# Discord-Corona-Bot
 A Discord Bot Made with Discord.js That Sends Current Updated Corona Virus Statistics | Node.js

## Node.js (Required)
**Node.js®** is a JavaScript runtime built on Chrome's V8 JavaScript engine. Download it [here](https://nodejs.org/dist/v12.16.1/node-v12.16.1-x64.msi)

## Discord.js (Required)
**Discord.js** is a powerful node.js module that allows you to interact with the Discord API very easily. It takes a much more object-oriented approach than most other JS Discord libraries, making your bot's code significantly tidier and easier to comprehend. You can install the discord.js module using: ```npm install discord.js```. You can view the discord.js documentation [here](https://discord.js.org/#/docs/main/stable/general/welcome)

## Corona Virus Statistics API
https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22confirmed%22%7D%2C%20%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Deaths%22%2C%22outStatisticFieldName%22%3A%22deaths%22%7D%2C%20%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Recovered%22%2C%22outStatisticFieldName%22%3A%22recovered%22%7D%5D

This API endpoint only obtains the latest global infection and mortality rates but you could potentially get more detailed statistics by playing around with the network requests.

### Website
https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6

This website currently makes 3 separate API calls to retreive Death, Confirmed and Recovered cases, however ArcGIS supports multiple queries in one request so the API call can retreive all 3 at once.

## Setup
1. First, you need to **create** a Discord bot. Here's an easy tutorial: [How to Make a Discord Bot](https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/)
2. Secondly, you need to get your bots authorization **token**. Copy it to your clipboard
3. Third, you will need to **invite** your bot to **your server**.
4. Then you need to run the ```install.bat``` file to install all required dependencies which includes **discord.js** and **request**. The command prompt may be closed once everything has stopped.
5. After installing all the required depencies, you will need to **edit** the ```index.js``` file to include your bots' **token** inside the **empty** string: ```const Token = '';```
6. Then **run** the ```start.bat``` file to start running your bot, and type ```!corona``` in **any** channel and the bot will respond by sending a nice embed containing everything.

## Showcase
![Showcase](https://meth.dev/0e55FE7.png)
