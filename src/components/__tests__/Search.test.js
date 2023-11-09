import Body from "../Body";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_TEST_DATA } from "../mocks/data";

// Mocking Fetch and json function as both of them return Promises. (Global Functions)
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_TEST_DATA);
    },
  });
});

test("Check Shimmer Results on Homepage", () => {
  // Since it doesn't wait for data to be loaded
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(5);
  // .toBeInTheDocument shows the avability of data
  //   expect(shimmer.children).toBeInTheDocument();
});

test("Check Restaurant Results on Homepage", async () => {
  // Since it doesn't wait for data to be loaded
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("resDetails")));

  const resDetails = body.getByTestId("resDetails");
  expect(resDetails.children.length).toBe(9);
});
