import {
  Form,
  useActionData,
  useLoaderData,
  useSubmit,
} from "@remix-run/react";
import { getCarListItems } from "~/models/car.server";

export const loader = async () => {
  const carFilters = { limit: 10, offset: 4, make: "", brand: null };
  const carListItems = await getCarListItems(carFilters);

  return carListItems;
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const make = formData.get("make");

  const carFilters = { limit: 10, offset: 4, make, brand: null };
  const carListItems = await getCarListItems(carFilters);

  return carListItems;
};

export default function CarsPage() {
  const loaderData = useLoaderData();
  console.log("1 loaderData", loaderData);
  const actionData = useActionData();
  console.log("2 actionData", actionData);

  const submit = useSubmit();

  function handleChange(event) {
    submit(event.currentTarget, { replace: true });
  }

  return (
    <div>
      <Form method="post" onChange={handleChange}>
        BMW
        <input name="make" type="radio" value="BMW" />
        <br />
        <br />
        Toyota
        <input name="make" type="radio" value="Toyota" />
        <br />
        <br />
        {/* <button type="submit">Filter Cars </button> */}
      </Form>
    </div>
  );
}
