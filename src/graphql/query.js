import gql from "graphql-tag";

export const GET_LOGS_CHECKS_QUERY = gql`
  query logsChecks($input: LogsChecksInput!) {
    logsChecks(input: $input) {
      error
      ok
      logs {
        userName
        teamName
        goToWork
        lunch
        goHome
        prevention
        pantry
      }
    }
  }
`;
