export = function() {
  return actor({
    waitForVisibleAndClick(element){
      this.wait(5)
      this.waitForVisible(element)
      this.click(element)
    },

    waitForVisibleAndFill(element, info){
      this.waitForVisible(element)
      this.fillField(element, info)
    },

    waitForVisibleAndSelectOption(element, info){
      this.waitForVisible(element)
      this.selectOption(element, info)
    },

    waitForVisibleAndCheckOption(element){
      this.waitForVisible(element)
      this.checkOption(element)
    }
  })
}