const request = require('request');
const {promisify} = require('util');

const promisifyRequest = promisify(request);

const getWeather = async (cityName) => {
    let data = await promisifyRequest({
        uri: `https://api.openweathermap.org/data/2.5/find?q=${cityName},${countryCode}&units=metric&APPID=${process.env.APPID}`,
        // we have to use q= as that is what the api specifies 
        json: true
    });
    return data.body;
}
module.exports = getWeather