describe("script",async()=>
{
    it('MakeMytrip',async()=>
    {
       await browser.url("https://www.tripodeal.com/airline/spicejet?utm_source=google_spicejet&gclid=CjwKCAjw7p6aBhBiEiwA83fGuhQoRhH-tc4xmeASTL7oMN18rGwB9ekqpzwMSf9P5txIMLERzJAp2hoCT9AQAvD_BwE")
await browser.maximizeWindow()
await browser.$("(//div[@class='form-check form-check-inline']//label//input[@class='form-check-input'])[2]").click()
await browser.$("(//div[@class='col-6 col-sm-6 col-lg-6 mt-2 date-row'])[1]").click()
await browser.$("//th[text()='Sun']/ancestor::div[@class='picker__box']/descendant::div[@id='dateNew_1665599400000']").click()
 await browser.$("//span[text()='Travellers & Cabin']/ancestor::div[@class='col-12 col-md-8 mt-3']//i[@class='zmdi zmdi-account-circle zmdi-hc-2x icf']").click()
 browser.pause(3000)
 //await browser.$("//div[text()='Adult']/ancestor::div[@class='d-flex justify-content-start']/descendant::button[@data-type='plus'] ").click()




//div[text()='Adult']/ancestor::div[@class='d-flex justify-content-start']/descendant::button[@data-type='plus']
    })
})