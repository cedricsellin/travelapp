const api = require('./app.js')
describe("Date Validation", () => {
    test("testing the date validation YYYY-MM-DD in JS", () => {

        expect(api.isValidDate("2019-10-21"))
        expect(api.isValidDate(!"19-10-21"))

    })

})

