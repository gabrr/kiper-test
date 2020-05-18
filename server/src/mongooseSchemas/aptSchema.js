import mongoose from 'mongoose'

const aptSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    number: {
        type: String,
        required: true
    },
    block: {
        type: String,
        required: true
    },
    owner: {
        id: mongoose.Types.ObjectId,
        name: {
            type: String,
            require: true
        },
        birthdate: {
            type: String,
            default: Date.now
        },
        phone: {
            type: String
        },
        cpf: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        class: String
    },
    living: [{
        id: mongoose.Types.ObjectId,
        name: {
            type: String,
            require: true
        },
        birthdate: {
            type: String,
            default: Date.now
        },
        phone: {
            type: String
        },
        cpf: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        class: String
    }]
}, { timestamps: true })

export default mongoose.model('Apartment', aptSchema)