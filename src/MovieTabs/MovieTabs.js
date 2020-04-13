import React from "react";
import styles from "./MovieTabs.module.css";

class MovieTabs extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { sort_by, updateSortBy } = this.props;

    const getCSSClass = value => {
      console.log("1================1");
      console.log(sort_by);
      console.log(value);
      console.log(`${sort_by === value ? ".active" : ""}`);
      console.log("2================2");
      return sort_by === value ? "styles.active" : "";
    };

    const handleClick = value => {
      return () => {
        updateSortBy(value);
      };
    };

    return (
      <div>
        MovieTabs:
        <ul>
          {/* !!!!!!!!!  Rewrite this shit */}
          <li
            onClick={handleClick("popularity.desc")}
            className={getCSSClass("popularity.desc")}
          >
            Popularity desc
          </li>

          <li
            onClick={handleClick("revenue.desc")}
            className={getCSSClass("revenue.desc")}
            // className={styles.active}
          >
            Revenue desc
          </li>
          <li
            onClick={handleClick("vote_average.desc")}
            className={getCSSClass("vote_average.desc")}
          >
            Vote average desc
          </li>
        </ul>
      </div>
    );
  }
}

// const MovieTabs = props => {
// };

export default MovieTabs;
