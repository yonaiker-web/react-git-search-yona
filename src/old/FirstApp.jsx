import React from "react";
import PropTypes from "prop-types";

const dateNow = () => {
  const date = new Date();
  return date;
};

const FirstApp = ({ title, subTitle }) => {
  if (!title) {
    throw new Error("El titulo no existe");
  }
  return (
    <div>
      <h1>{title}</h1>
      <div className="">Aqui la hora: {dateNow}</div>
      <div className="">Otra cosa</div>
    </div>
  );
};

export default FirstApp;

//asi podemos agregar tipados desde REact sin typescript
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
};
