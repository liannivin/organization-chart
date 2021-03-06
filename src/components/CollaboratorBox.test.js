import React from "react";
import { render, fireEvent } from "@testing-library/react";

import CollaboratorBox from "./CollaboratorBox";

test("CollaboratorBox UI", () => {
  const collaborator = [{ id: 1, name: "Juan", parentId: null }];

  const getChildren = id => {
    return [{ id: 2, name: "Pepe", parentId: 1 }].filter(
      collaborator => collaborator.parentId === id
    );
  };

  const addChild = jest.fn();

  const { getByLabelText, asFragment } = render(
    <CollaboratorBox
      collaborator={collaborator}
      getChildren={getChildren}
      addChild={addChild}
    />
  );

  expect(asFragment()).toMatchSnapshot();

  fireEvent.click(getByLabelText("Add Button"));

  expect(asFragment()).toMatchSnapshot();
});
