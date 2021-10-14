let array1 = ["Oh bluh.", "Blah blih.", "Blah bluh."]
let array2 = ["Blah blih.", "Blah bluh.", "Oh bluh.", "Blubber.", "Glubber.", "Flubber.",]
let array3 = ["Pillow.", "Willow", "Brillo", "Armadillo"]

let mergedObject = {
    phrase1: array1,
    phrase2: array2,
    phrase3: array3
}


function mixedMessages(obj) {
    const phrases = []
    for (let key in obj) {
        let currentKey = obj.key
        let index = Math.floor(Math.random() * obj[key].length)
        let phrase = obj[key][index]
        phrases.push(phrase)
    }
    return `Phrase1: ${phrases[0]}\nPhrase2: ${phrases[1]}\nPhrase3: ${phrases[2]}`
}

console.log(mixedMessages(mergedObject))