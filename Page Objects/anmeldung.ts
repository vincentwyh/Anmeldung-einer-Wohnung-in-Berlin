import { vincentInfo } from '../testData/userData'

const {I} = inject()

export const anmeldung = {
    buttons: {
        berlinweiteTerminbuchung: '.button--negative',
        terminsucheWiederholen: '.disable',
        buchbar: '.buchbar',
        uhrzeit: `//a[@title="Zu diesem Zeitpunkt einen Termin eintragen…"]`,
        registerSubmit: '#register_submit',
    },
    textFields: {
        familyName: '#familyName',
        email: '#email',
        emailEquality: '#emailequality',
    },
    dropdowns: {
        control: '.field-type-select',
    },
    checkboxes: {
        abgelesen: '#agbgelesen',
    },
    texts: {
        header: '.zms .header .title',
    },

    fillOutForm() {
        I.waitForVisibleAndFill(anmeldung.textFields.familyName, vincentInfo.familyName)
        I.waitForVisibleAndFill(anmeldung.textFields.email, vincentInfo.email)
        I.waitForVisibleAndFill(anmeldung.textFields.emailEquality, vincentInfo.email)
        I.waitForVisibleAndSelectOption(anmeldung.dropdowns.control, 'Nicht zustimmen')
        I.waitForVisibleAndCheckOption(anmeldung.checkboxes.abgelesen)
        I.waitForVisibleAndClick(anmeldung.buttons.registerSubmit)
    }
  }