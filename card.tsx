import React from "react";

export function Card({ children, ...props }: React.PropsWithChildren<{}>) {
  return <div {...props}>{children}</div>;
}