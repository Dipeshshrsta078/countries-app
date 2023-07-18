import { useQuery } from "@apollo/client";
import { LIST_COUNTRIES } from "../graphql";

type CountryFilterInput = {
  code?: StringQueryOperatorInput;
  continent?: StringQueryOperatorInput;
  currency?: StringQueryOperatorInput;
};

type StringQueryOperatorInput = {
  eq?: string;
  in?: string[];
  regex?: string;
};

const useGQL = () => {
  const GET_ALL_COUNTRIES = (input: CountryFilterInput = {}) =>
    useQuery(LIST_COUNTRIES, { variables: { input } });

  return {
    GET_ALL_COUNTRIES,
  };
};

export default useGQL;
