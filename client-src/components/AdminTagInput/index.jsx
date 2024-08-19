import React from "react";
import { TagsInput } from "react-tag-input-component";

export default function AdminTagInput(
    { label, value, onChange, extraParams, labelComponent = null }) {

    return (<label className="">
      {label&& <div className="lh-page-subtitle">{label}</div>}
      {labelComponent}
      <div className="w-full">
      <TagsInput
        value={value}
        onChange={onChange}
        {...extraParams}
      />
    </div>
  </label>);
}