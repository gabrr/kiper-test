import * as Constants from '../constants'

const INITIAL_STATE = [{
        id: "1234",
        number: 100,
        block: "E",
        owner: {
            id: "vjgchvjbkhvgh",
            name: "Pedro Carvalho",
            birthdate: "20/12/45",
            phone: "1199999999",
            cpf: "122.333.444-99",
            email: "example@examplo.com"
        },
        living: [{
                id: "xdghjkhgc",
                name: "Helena",
                birthdate: "20/12/45",
                phone: "119999999999",
                cpf: "122.333.444-99",
                email: "ghgjgfgjghfhff@any.com"
            },
            {
                id: "nbvgjn",
                name: "Jhon hhh",
                birthdate: "20/12/45",
                phone: "119999999999",
                cpf: "122.333.444-99",
                email: "ghgjgfgjghfhff@any.com"
            },
            {
                id: "Booon hhhhh",
                name: "Helena",
                birthdate: "20/12/45",
                phone: "119999999999",
                cpf: "122.333.444-99",
                email: "ghgjgfgjghfhff@any.com"
            },
        ],
        _createdAt: "",
        _updatedAt: ""
    },
    {
        id: "09876",
        number: 200,
        block: "E",
        owner: {
            id: "vjgchvjbkhvgh",
            name: "Pedro Carvalho",
            birthdate: "20/12/45",
            phone: "1199999999",
            cpf: "122.333.444-99",
            email: "example@examplo.com"
        },
        living: [{
                id: "xdghjkhgc",
                name: "Helena",
                birthdate: "20/12/45",
                phone: "119999999999",
                cpf: "122.333.444-99",
                email: "ghgjgfgjghfhff@any.com"
            },
            {
                id: "nbvgjn",
                name: "Jhon hhh",
                birthdate: "20/12/45",
                phone: "119999999999",
                cpf: "122.333.444-99",
                email: "ghgjgfgjghfhff@any.com"
            },
            {
                id: "Booon hhhhh",
                name: "Helena",
                birthdate: "20/12/45",
                phone: "119999999999",
                cpf: "122.333.444-99",
                email: "ghgjgfgjghfhff@any.com"
            },
        ],
        _createdAt: "",
        _updatedAt: ""
    },
    {
        id: "56787654",
        number: 300,
        block: "E",
        owner: {
            id: "vjgchvjbkhvgh",
            name: "Gabriel Oliveira",
            birthdate: "20/12/45",
            phone: "1199999999",
            cpf: "122.333.444-99",
            email: "example@examplo.com"
        },
        living: [{
                id: "xdghjkhgc",
                name: "Helena",
                birthdate: "20/12/45",
                phone: "119999999999",
                cpf: "122.333.444-99",
                email: "ghgjgfgjghfhff@any.com"
            },
            {
                id: "nbvgjn",
                name: "Jhon hhh",
                birthdate: "20/12/45",
                phone: "119999999999",
                cpf: "122.333.444-99",
                email: "ghgjgfgjghfhff@any.com"
            },
            {
                id: "Booon hhhhh",
                name: "Helena",
                birthdate: "20/12/45",
                phone: "119999999999",
                cpf: "122.333.444-99",
                email: "ghgjgfgjghfhff@any.com"
            },
        ],
        _createdAt: "",
        _updatedAt: ""
    }
]

export const apartmentReducer = (state = INITIAL_STATE, action) => {
    const { apartments } = action
    switch (action.type) {
        case Constants.GET_ALL_APS:
            return [...state, ...apartments]
        default:
            return state
    }
}



// {
//     id: "",
//     number: null,
//     block: "",
//     owner: {
//         id: "",
//         name: "",
//         birthdate: "",
//         phone: null,
//         cpf: null,
//         email: ""
//     },
//     living: [{
//         id: "",
//         name: "",
//         birthdate: "",
//         phone: null,
//         cpf: null,
//         email: ""
//     }, ],
//     _createdAt: "",
//     _updatedAt: ""
// }