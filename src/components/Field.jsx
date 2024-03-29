import React from "react"

const Field = ({ label, errorMessage, invalid, component: Component, ...rest }) => {
  return (
    <label className="block">
      {label && <span className="block text-sm mb-2">{label}</span>}
      {Component && Component({ invalid, ...rest })}
      {invalid && <span className="text-xs text-red-500">{errorMessage}</span>}
    </label>
  )
}

export default Field
