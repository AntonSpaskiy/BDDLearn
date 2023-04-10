const { When, Given } = require('@wdio/cucumber-framework');
const { pages } = require('../po')

Given('I open {string} page', function(name) {
    return pages(name).open();
});

When('I click {string} link from side menu', function(link) {
    return pages('Dashboard').sideMenu.item(link).click();
});

When('I click add new doctor button from list header', function() {
    return pages('Doctors').doctorListHeader.addNewDoctorBtn.click();
});

When('I click {string} button in modal window', function(button) {
    return pages('Doctors').addDoctorModal.clickButton(button);
});

When('I wait {int} seconds', function(timeToWaitInSeconds) {
    return browser.pause(timeToWaitInSeconds = 1000);
});