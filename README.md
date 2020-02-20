# Discord-Corona-Bot
 A Discord Bot Made with Discord.js That Sends Current Updated Corona Virus Statistics | Node.js

## Node.js (Required)
**Node.js®** is a JavaScript runtime built on Chrome's V8 JavaScript engine. Download it [here](https://nodejs.org/dist/v12.16.1/node-v12.16.1-x64.msi)

## Discord.js (Required)
**Discord.js** is a powerful node.js module that allows you to interact with the Discord API very easily. It takes a much more object-oriented approach than most other JS Discord libraries, making your bot's code significantly tidier and easier to comprehend. You can install the discord.js module using: ```npm install discord.js```

## Corona Virus Statistics API
https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22confirmed%22%7D%2C%20%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Deaths%22%2C%22outStatisticFieldName%22%3A%22deaths%22%7D%2C%20%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Recovered%22%2C%22outStatisticFieldName%22%3A%22recovered%22%7D%5D

This API endpoint only obtains the latest global infection and mortality rates but you could potentially get more detailed statistics by playing around with the network requests.

### Website
https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6

This website currently makes 3 separate API calls to retreive Death, Confirmed and Recovered cases, however ArcGIS supports multiple queries in one request so the API call can retreive all 3 at once.
