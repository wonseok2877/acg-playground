import { useQuery } from "@apollo/client";
import moment from "moment";
import React, { useEffect, useState } from "react";
import UserBox from "../components/UserBox";
import { GET_LOGS_CHECKS_QUERY } from "../graphql/query";

const Main = () => {
  const [date, setDate] = useState("");

  /* ! : useEffect에다가 []를 넣으면 componentDidMount와 똑같은 효과.
  []안에다 state를 넣으면 해당 state가 변할 때마다 실행된다.
  componentDidUpdate의 효과.  */
  useEffect(() => {
    setDate(moment().format("YYYY-MM-DD"));
    console.log("Mounted !");
  }, []);

  useEffect(() => {
    console.log("date changed !");
  }, [date]);

  const { loading, data } = useQuery(GET_LOGS_CHECKS_QUERY, {
    variables: {
      input: {
        date,
      },
    },
  });

  /* ! : moment()의 substract와 add !
   moment의 인자값으로 넣어서 현재 date state에 따른 날짜를 가져온다.   */
  const handleLeft = () => {
    setDate(moment(date).subtract(1, "days").format("YYYY-MM-DD"));
  };
  const handleRight = () => {
    setDate(moment(date).add(1, "days").format("YYYY-MM-DD"));
  };
  console.log("rendered!");
  console.log(data && data.logsChecks.logs);

  return (
    <>
      <div>
        <button onClick={handleLeft}>👈</button>
        <span>{date}</span>
        <button onClick={handleRight}>👉</button>
      </div>
      <div>
        {loading
          ? null
          : data &&
            // 임시로 id를 index로 넣었음
            data.logsChecks.logs.map((log, index) => (
              <div>
                <UserBox
                  key={index}
                  id={index}
                  userName={log.userName}
                  teamName={log.teamName}
                  goToWork={log.goToWork}
                  lunch={log.lunch}
                  goHome={log.goHome}
                  pantry={log.pantry}
                  prevention={log.prevention}
                />
              </div>
            ))}
      </div>
    </>
  );
};

export default Main;
