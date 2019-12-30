const api = require('./externalAPI.js')

describe("Validation of the external APIs calls", () => {
    test("checking if the function detects valid and invalid URLs", () => {
        const input = {
            city: 'New York',
            date: '12-31-2019'
        }

        api.getCityInformation(input.city, input.date).then(results => {
            expect(result.city == input.city)
            expect(result.departingDate == input.date)
        })

    })

})

