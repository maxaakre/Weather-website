const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/51e37e7fab0e58f017a24f46caaa57be/" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude) + "?units=si&lang=sv"

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' Det är ' + body.currently.temperature + ' celcius utomhus. Hösta tempraturen idag är ' + body.daily.data[0].temperatureHigh + ' Och den lägsta tempaturen idag är ' + body.daily.data[0].temperatureLow + ' . Det är ' + body.currently.precipProbability + '% chans för regn.')
        }
    })
}

module.exports = forecast