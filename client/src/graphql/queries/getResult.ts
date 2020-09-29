import { gql } from "@apollo/client";

export const GET_RESULTS = gql`
  query getResult($number: Int!) {
    getResult(number: $number) {
      val3
      val5
    }
  }
`;
