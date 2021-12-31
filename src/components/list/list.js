import React, { useEffect, useState } from "react";
import "./list.css";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import axios from "axios";

function List() {
  let [listData, setListData] = useState(undefined);
  let upVote = 0;
  let downVote = 0;
  let totalVotes = 0;
  let result = 0;
  let date = 0;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let Day = 0;
  let month = "";

  useEffect(() => {
    let reqHandler = async () => {
      try {
        let url = "https://hoblist.com/api/movieList";
        let parameter = {
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting",
        };
        let { data } = await axios.post(url, parameter);
        console.log(data.result);
        setListData(data.result);
        data.result.map((elem, index) => {
          // date = new Date(elem.releasedDate * 1000);
          // console.log("date: ", date.toUTCString());
          return console.log("date: ");
        });
      } catch (error) {
        alert(error);
      }
    };
    reqHandler();
  }, []);
  return (
    <section className="listSec">
      <div className="listSecSub">
        <div className="listSubSecWin">
          {listData &&
            listData.map((elem, index) => {
              if (elem.upVoted) {
                upVote = elem.upVoted.length;
                downVote = elem.downVoted.length;
                totalVotes = elem.totalVoted;
                result = upVote - downVote;
              } else {
                upVote = 0;
                downVote = 0;
                totalVotes = 0;
                result = 0;
              }
              date = new Date(elem.releasedDate * 1000);
              Day = date.getDate();
              month = months[date.getMonth()];
              return (
                <div className="listCard" key={index}>
                  <div className="info">
                    <div className="vote">
                      <ArrowDropUp className="arrowIcon" />
                      <span>{result}</span>
                      <ArrowDropDown className="arrowIcon" />
                      <span>vote</span>
                    </div>
                    <div className="poster">
                      <img
                        src={elem.poster}
                        alt="Poster"
                        className="posterImg"
                      />
                    </div>
                    <div className="details">
                      <h2>{elem.title || "title"}</h2>
                      <div className="otherDetails">
                        <div className="deatilProp">
                          <span className="prop">Genre: </span>
                          <p className="value">{elem.genre}</p>
                        </div>
                        <div className="deatilProp">
                          <span className="prop">Director: </span>
                          <p className="value">
                            {elem.director.map((elem) => `${elem},`)}
                          </p>
                        </div>
                        <div className="deatilProp">
                          <span className="prop">Starring: </span>
                          <p className="value">
                            {elem.stars.map((elem) => `${elem},`)}
                          </p>
                        </div>
                        <div className="deatilProp extraProp">
                          <span>
                            {elem.runTime ? elem.runTime : "null"} |{" "}
                            {elem.language} | {`${Day} ${month}`}
                          </span>
                        </div>
                        <div className="deatilProp">
                          <span className="highLighted">
                            {elem.pageViews} views | Voted By {elem.totalVoted}{" "}
                            People
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="listBtn">watch-trailer</button>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default List;
