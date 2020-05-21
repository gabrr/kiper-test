export const multipleMatchs = (textInput, items) => {
    return new Promise((resolve) => {
        const shortTxt = text => {
            return text.toLowerCase().replace(/\s/gi, '')
        }
        const textToLowerNoSpace = shortTxt(textInput)

        // creating an array with values to be compared AKA: name and email
        const namesAndEmail = items.map((apartment) => {
            const { name, email } = apartment.owner
            const { block, number } = apartment
            return {
                hits: {
                    code: shortTxt(name) + shortTxt(email) + shortTxt(number) + shortTxt(block),
                    apartment

                }
            }
        })

        // return apartment matching the text input
        const result = namesAndEmail.map((item) => {
            return new RegExp(textToLowerNoSpace, 'gi').test(item.hits.code) && item.hits.apartment
        }).filter(res => res !== false)


        resolve(result)

    })

}