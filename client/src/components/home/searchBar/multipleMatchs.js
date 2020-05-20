export const multipleMatchs = (textInput, items) => {
    console.log({ textInput, items })
    const namesAndEmail = items.map(({ owner }) => {
        return {
            hits: owner.name.toLowerCase().replace(/\s/gi, '') + owner.email.toLowerCase().replace(/\s/gi, '')
        }
    })

    console.log({ namesAndEmail })

}