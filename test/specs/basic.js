
const process = require('process'); 
var args = process.argv
var assert = require('assert');

//method to return a random email suffix
function randomEmailSuffix() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

//get the basic auth credentials fro the CLI exec
var bAuthUserId = process.argv[3]
var bAuthPassword = process.argv[4]
var bAuthUrlDomain = process.argv[5]

describe('Primary Bid', () => {

    browser.setTimeout({ 'script': 120000 })
    browser.url('https://' + bAuthUserId + ':' + bAuthPassword + '@' + bAuthUrlDomain + '/')
    browser.maximizeWindow()

    it('should navigate to the required pages', () => {

        const homeLink = $$('.navigation__link')[0]
        const aboutUsLink = $$("[href='/about']")[0]
        const FAQLink = $$("[href='/faqs']")[0]
        const newsLink = $$("[href='/news']")[0]
        //const featuredNewsContent = $$('.title--line-teal-flex')[0]
        //const allNewsContent = $$('.title--line-teal-flex')[1]
        const newsItems = $$("[data-testid='news-data']")
        const newsFilter = $('[data-testid="news-filter-button"]')
        const newsFilterWebinar = $('[data-testid="news-filter-checkbox-Webinar"]')
        const signupLink = $$('.button--teal')[0]
        const signUpEmail = $('[name="email"]')
        const signUpPassword = $('[name="password"]')
        const signUpConfirmPassword = $('[name="confirmPassword"]')
        const signUpSubmit = $('[type="submit"]')
        const signUpErrorEmail = $('.error') //element valid for not > 1 data error.
        const welcomeSignedUp = $('div.top-border-teal p')

        console.log(randomEmailSuffix() + "@gmail.com ###############################################################")

        
        
        //About Us
        browser.pause(2000)
        aboutUsLink.click()
        browser.pause(2000)
        expect(browser).toHaveUrlContaining('playground.primarybid.com/about')
        browser.url('https://playground.primarybid.com/')
        browser.pause(2000)

        //FAQ
        FAQLink.click()
        browser.pause(2000)
        expect(browser).toHaveUrlContaining('playground.primarybid.com/faqs')
        browser.url('https://playground.primarybid.com/')
        browser.pause(2000)
        
        //News
        newsLink.click()
        browser.pause(2000)
        expect(browser).toHaveUrlContaining('playground.primarybid.com/news')

        //verify news content
        //featuredNewsContent.scrollIntoView()
        //expect(featuredNewsContent).toExist()
        //allNewsContent.scrollIntoView()
        //expect(allNewsContent).toExist()
        assert.ok(newsItems.length > 0)

        //verify news filter
        newsFilter.scrollIntoView()
        newsFilter.click()
        browser.pause(1000)
        newsFilterWebinar.click()
        browser.pause(2000)
        browser.url('https://playground.primarybid.com/')
        browser.pause(2000)

        //Sign up
        signupLink.click()
        browser.pause(2000)
        expect(browser).toHaveUrlContaining('playground.primarybid.com/user/signup')
        signUpEmail.click()

        //verify match of passwords validation
        signUpEmail.setValue('joe.doe@gmail.com')
        signUpPassword.click()
        signUpPassword.setValue('bagshot_99')
        signUpConfirmPassword.click()
        signUpConfirmPassword.setValue('bagshot_98')
        signUpSubmit.click()
        expect(signUpErrorEmail).toHaveTextContaining('Passwords do not match')
        signUpPassword.clearValue()
        signUpPassword.clearValue()
        signUpConfirmPassword.clearValue()

        //verify email address format validation
        signUpEmail.setValue('joe.doegmail.com')
        signUpPassword.click()
        signUpPassword.setValue('bagshot_99')
        signUpConfirmPassword.click()
        signUpConfirmPassword.setValue('bagshot_99')
        signUpSubmit.click()
        expect(signUpErrorEmail).toHaveTextContaining('The email you have entered is not valid')
        signUpPassword.clearValue()
        signUpPassword.clearValue()
        signUpConfirmPassword.clearValue()

        //verify valid details lead to welcome and verify ID page
        signUpEmail.setValue(randomEmailSuffix() + '@gmail.com')
        signUpPassword.click()
        signUpPassword.setValue('bagshot_99')
        signUpConfirmPassword.click()
        signUpConfirmPassword.setValue('bagshot_99')
        signUpSubmit.click()
        browser.pause(2000)
        expect(welcomeSignedUp).toHaveTextContaining('Before you can get involved in upcoming share offers we need to verify your ID')
        browser.pause(2000)
        browser.url('https://playground.primarybid.com/')

    })
})
