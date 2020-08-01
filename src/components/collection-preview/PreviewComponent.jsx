import React from "react";

const PreviewComponent = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </div>
    </div>
  );
};

export default PreviewComponent;
