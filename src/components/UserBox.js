import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserBox extends Component {
  render() {
    console.log(this.props);
    const {
      id,
      userName,
      teamName,
      goToWork,
      lunch,
      goHome,
      pantry,
      prevention,
    } = this.props;

    /* 로직 : state를 쓸 필요가 없다. 비어있는 변수를 선언한 뒤 가장 나중에
    넣은 온도의 값을 안에다가 넣고, 이 변수를 렌더링하면 된다. */
    let time;
    if (goHome) {
      time = goHome;
    } else if (lunch) {
      time = lunch;
    } else if (goToWork) {
      time = goToWork;
    }

    return (
      <Link to={`user/${id}`}>
        <h1>{userName}</h1>
        <span>{teamName}</span>
        <h1>{time}</h1>
        {pantry ? <h1>탕비실 당번</h1> : prevention ? <h1>방역 당번</h1> : null}
      </Link>
    );
  }
}

export default UserBox;
