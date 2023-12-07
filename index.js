

function promptUser():
  - prompt for logo text
  - prompt for text color
  - prompt for shape type
  - prompt for shape color
  - return user input

function main():
  - userInputs = promptUser()
  - logo = new Logo(userInputs)
  - logo.render()
  - saveSVGFile(logo)
  - printMessage("Generated logo.svg")

function saveSVGFile(logo):
  - create file "logo.svg"
  - write logo.render() to file

function printMessage(message):
  - print message to command line

main()
