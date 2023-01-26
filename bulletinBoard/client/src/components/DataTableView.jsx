import React, { useCallback, useState } from "react";
import DataItem from "./DataItem";
import { extractFields } from "../utilities/data";

const DataTable = ({ data }) => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  if (data.length === 0) return <div>Nothing</div>;

  return (
    <ul className="w-full border-t-[3px] border-navy-400">
      {data.data.map((item) => {
        const { updatedAt, title, id, firstname, priority } =
          extractFields(item);

        return (
          <DataItem
            key={id}
            id={id}
            title={title}
            updatedAt={updatedAt}
            author={firstname}
            priority={priority}
          />
        );
      })}
    </ul>
  );
};

export default DataTable;
