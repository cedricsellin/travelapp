const api = require('./externalAPI.js')

describe("Validation of the external APIs calls", () => {
    test("checking if the function detects valid and invalid URLs", () => {
        const input = {
            city: 'Paris',
            date: '2019-12-31'
        }

        api.getCityInformation(input.city, input.date).then(result => {
            expect(result.city == input.city)
            expect(result.departingDate == input.date)
        })

    })

})

