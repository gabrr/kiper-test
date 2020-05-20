export const typeDefs = `

type Person {
  _id: String
  name: String
  email: String
  birthdate: String
  phone: String
  cpf: String
  class: String
}

type User {
  _id: String
  name: String
  email: String
  token: String
}

type Apartment {
  _id: String
  number: String!
  block: String!
  owner: Person!
  living: [Person!]!
  createdAt: String
  updatedAt: String
}

input UserInput {
  name: String
  email: String
  password: String
}

input PersonInput {
  _id: String
  name: String
  email: String
  birthdate: String
  phone: String
  cpf: String
  class: String
}

input CreateApartmentInput {
  number: String!
  block: String!
  owner: PersonInput
  living: [PersonInput]
}

input UpdateApartmentInput {
  _id: String
  number: String!
  block: String!
  owner: PersonInput
  living: [PersonInput]
}

type Deleted {
  acknowledged: String
  deletedCount: String
}

type Query {
  apartment(_id: String): Apartment!
  apartments: [Apartment!]!

  users: [User!]!
  user(_id: String): User!
  login(email: String, password: String): User!
}

type Mutation {
  createApt(input: CreateApartmentInput): Apartment!
  updateApt(input: UpdateApartmentInput): Apartment!
  deleteApt(_id: String): Deleted!

  createUser(input: UserInput): User!
}

`