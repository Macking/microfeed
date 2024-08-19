import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

export default function AdminTagInput(
    { label, value, options, onChange, extraParams, labelComponent = null }) {
    const [selected, setSelected] = useState([]);
    return (<label className="">
      {label&& <div className="lh-page-subtitle">{label}</div>}
      {labelComponent}
      <div className="w-full">
      <TagsInput
        value={selected}
        onChange={setSelected}
      />
    </div>
  </label>);
}