import Apartment from '../mongooseSchemas/aptSchema'

export const creatingApartment = async(input) => {
    const { number, block } = input
    try {
        const apt = await Apartment.findOne({ number, block })

        if (apt) throw new Error('This apartment already exists')

        return await Apartment.create(input)

    } catch (error) {
        return { message: error.message }
    }

}