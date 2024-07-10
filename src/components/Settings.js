import React from "react";

export default function Settings({ onSubmit, closeMenu, toggled, handleToggled }) {

  return (
    <div className="cover">
      <form onSubmit={onSubmit}>
        <button type="button" className="close" onClick={closeMenu}>
          x
        </button>
        <span>Timer:</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={toggled}
            id="toggle"
            onClick={handleToggled}
          />
          <span className="slider"></span>
        </label>
        <span>Tiempo:</span>
        <input type="text" placeholder="3" id="inputText" />
        <input type="submit" value={"guardar cambios"} id="save" />
      </form>
    </div>
  );
}
