import React from "react";

export default function Button({content, onClick, disabled}) {
  return (
    <button onClick={onClick} disabled={disabled}>{content}</button>
  )
}