import { generateTextAndImage } from "./utils/utils.js"

// 1. Change the value of the variable to your name
let name = "Ilia"

// 2. Change the value of the variable to your favorite activity
let favoriteActivity = "programming"

// 3. Assign the favoritePlace variable your favorite place
// I.e. city, mountain, pub, forrest, beach, Manhattan, etc.
let favoritePlace = "underwater"

// 4. Configure the AI by setting a temperature from 0 to 1
// The higher temperature, the more random & experimental output
let temperature = 1

generateTextAndImage(name, favoriteActivity, favoritePlace, temperature)
