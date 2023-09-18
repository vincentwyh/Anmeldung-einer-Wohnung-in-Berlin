import { anmeldung } from "../Page Objects/anmeldung"

const {I} = inject()

Feature('Anmeldung')

Scenario('User can make a appointment',  async() => {
    I.amOnPage('https://service.berlin.de/dienstleistung/120686/')
    I.waitForVisibleAndClick(anmeldung.buttons.berlinweiteTerminbuchung)    
    I.waitForVisibleAndClick(locate(anmeldung.buttons.buchbar).at(2))
    I.waitForText('Terminvereinbarung', 5 , anmeldung.texts.header)
    I.waitForVisibleAndClick(locate(anmeldung.buttons.uhrzeit).at(1))
    anmeldung.fillOutForm()
})
