import Header from "../Header";
import { getAllByTestId, render } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load after the render", () => {
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getByTestId("logo");
  expect(logo.src).toBe(
    "https://static.vecteezy.com/system/resources/thumbnails/005/513/590/small/catering-quality-food-design-premium-logo-vector.jpg"
  );
});
