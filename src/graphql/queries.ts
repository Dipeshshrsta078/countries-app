import { gql } from "@apollo/client";

export const LIST_COUNTRIES = gql`
  query countries($input: CountryFilterInput!) {
    countries(filter: $input) {
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
