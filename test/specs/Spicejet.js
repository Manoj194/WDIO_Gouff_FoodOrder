
describe('SpiceJet', async () => {
    it('Navigate to SpiceJet', async () => {
        await browser.maximizeWindow()
        await browser.url("https://www.spicejet.com/")
        const RoundTripIcon = await browser.$("//div[text()='Round Trip']")
        RoundTripIcon.click()
        const Returndatecalbutton = await browser.$("//div[text()='Return Date']")
        Returndatecalbutton.click()
        const selectdate = await browser.$("//div[@data-testid='undefined-month-November-2022']/div[3]//div[@data-testid='undefined-calendar-day-10']")
        selectdate.click()
        const optionbutton = await browser.$("//div[text()='Armed Forces']")
        optionbutton .click()
        const FindButton = await browser.$("//div[text()='Search Flight']")
        FindButton.click()
     })
})