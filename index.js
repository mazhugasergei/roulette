const readline = require("readline")

const magazine = [0, 0, 0, 1, 0, 0]

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const main = async () => {
  while (true) {
    await sleep(1000)
    console.log("Opponents move...")
    await sleep(3000)

    if (magazine[Math.floor(Math.random() * 6)]) {
      console.log("*BANG*")
      await sleep(1000)
      console.log("You win!")
      await sleep(1000)
      process.exit()
    } else {
      console.log("*click*")
      await sleep(1000)
      console.log("Your move")
      await sleep(1000)
      process.stdout.write("Press Enter to test your luck...")

      await new Promise((resolve) => rl.once("line", resolve))

      if (magazine[Math.floor(Math.random() * 6)]) {
        console.log("*BANG*")
        await sleep(1000)
        console.log("You lose D:")
        await sleep(1000)
        process.exit()
      } else {
        console.log("*click*")
      }
    }
  }
}

main()
