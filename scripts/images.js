const fs = require('fs')

const imageFileNames = () => {
    const array = fs
        .readdirSync('src/res/images')
        .filter((file) => {
            return file.endsWith('.png')
        })
        .map((file) => {
            return file.replace('.png', '')
        })

    return Array.from(new Set(array))
  }

    const generate = () => {
        let properties = imageFileNames()
        .map((name) => {
            return `\t${name}: require('./images/${name}.png')`
        })
        .join(',\n')

    const string = `const images = {\n${properties}\n}\n\nexport default images
    `


    fs.writeFileSync('src/res/images.js', string, 'utf8')
}
generate()