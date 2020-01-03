const api = require('./externalAPI.js')

/*describe("Validation of the external APIs calls", () => {
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

}) */

describe("Checking the configuration of the server", () => {
    test("checking keys are correctly setup", ()=>{
        const config = api.getServerConfig()
        
        expect(config.geonameUser).toBeDefined()
        expect (config.pixabayKey).toBeDefined()
        expect (config.darkskyKey).toBeDefined()

    })

})

describe("Validation of the external APIs calls", () => {
    test("checking if the function detects valid and invalid URLs", () => {
        const input = {
            city: 'Paris',
            country: 'France'
        }

        api.testPixabayConnection(input.city, input.country).then(result => {
            expect(result.tags && result.webformatURL)
        })

    })

})

