/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function CompanyForm({ setCompanyName }) {
  const formContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    "@media (max-width: 960px)": {
      width: "70%",
      marginLeft: "15%"
    }
  };

  const styledForm = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "500px",
    padding: "1.5em",
    background: "black",
    borderRadius: "0.5em",
    "@media (max-width: 960px)": {
      height: "120px",
      fontSize: "14px"
    }
  };

  const styledHeader = {
    textAlign: "center",
    margin: "15px",
    fontSize: "40px",
    color: "white",
    fontWeight: "bolder",
    "@media (max-width: 960px)": {
      height: "50px",
      fontSize: "30px",
      marginBottom: "5px",
      marginTop: "0px"
    }
  };

  const inputCompanyName = {
    margin: "1em 0",
    fontSize: "30px",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "4px",
    outline: "none",
    border: "none",
    borderBottom: "1px solid #ddd",
    width: "100%",
    textAlign: "center",
    "&:focus": {
      border: "1px solid red"
    },
    "@media (max-width: 960px)": {
      fontSize: "12px",
      width: "250px"
    }
  };

  const submitButton = {
    lineHeight: "1.5em",
    background: "#757575",
    border: "none",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "0.5em",
    cursor: "pointer",
    borderRadius: "0.25rem",
    textAlign: "center",
    width: "50%",
    "&:hover": {
      backgroundColor: "#484848"
    },
    "@media (max-width: 960px)": {
      fontSize: "12px",
      margin: "0.5em",
      width: "30%",
      marginTop: "-5px",
      padding: "0.2em"
    }
  };

  const [content, setCont] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setCompanyName(content);
  }

  function handleChange(event) {
    setCont(event.target.value);
  }

  return (
    <div css={formContainer}>
      <form onSubmit={handleSubmit} css={styledForm}>
        <header css={styledHeader}>Company's name</header>
        <input
          css={inputCompanyName}
          aria-label="Input to get Company's name"
          placeholder="Enter company's name"
          type="text"
          required
          name="company"
          id="company"
          onChange={handleChange}
          autoFocus
          autoComplete="off"
        />
        <button css={submitButton} type="submit">
          Next
        </button>
      </form>
    </div>
  );
}

export default CompanyForm;
