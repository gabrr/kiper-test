export const multipleMatchs = (textInput, items) => {
    return new Promise((resolve) => {
        const textToLowerNoSpace = textInput.toLowerCase().replace(/\s/gi, '')

        // creating an array with values to be compared AKA: name and email
        const namesAndEmail = items.map((apartment) => {
            return {
                hits: {
                    code: apartment.owner.name.toLowerCase().replace(/\s/gi, '') + apartment.owner.email.toLowerCase().replace(/\s/gi, ''),
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