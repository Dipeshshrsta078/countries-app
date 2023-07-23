import { gql } from "@apollo/client";

export const LIST_COUNTRIES = gql`
  query countries {
    countries {
      name
      code
      languages {
        name
      }
      continent {
        name
      }
      currency
      capital
    }
  }
`;
