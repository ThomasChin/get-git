import React from "react";

const Info = () => {
  let styles = {
    textAlign: "center"
  };

  return (
    <div style={styles}>
      <div className={`alert`}>
        <h2>Get Git!</h2>
        <h4>
          A simple web application that makes it easy to find GitHub users and
          information about them.
        </h4>
        <h4>
          Simply type something in the search bar to search the entire GitHub
          API for users.
        </h4>
        <h4>
          To view more information about any particular user, just click on the
          more button!
        </h4>
      </div>
    </div>
  );
};

export default Info;
