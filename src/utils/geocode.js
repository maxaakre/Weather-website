const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWF4YWFrcmUiLCJhIjoiY2s0cjJwd2FtMTE3NTNvcGxwejd1M2NzZyJ9.NY4Yjl50ZNkCKZ59jAKzgQ'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Kan inte ansluta till location service!', undefined)
        } else if (body.features.length === 0) {
            callback('Kan inte hitta platsen, försök igen', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode