import { gql } from 'apollo-boost'

export default gql ` 
{
  apartments {
          _id,
          number,
          block,
          owner {
              name,
              email,
              phone,
              cpf,
              birthdate,
              class
          },
          living{
              _id,
              name,
              email,
              phone,
              cpf,
              birthdate,
              class
          }
      }
}
  
  `