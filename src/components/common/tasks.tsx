import type { FunctionComponent } from "react";

export const Tasks: FunctionComponent = () => (
  <div className="flex-1">
    <h2 className="mb-3 uppercase underline size-4">Tasks</h2>
    <ol className="flex flex-col gap-3">
      <li>
        1. In the <code>src/data</code> directory, you can see an array of
        books. Use typescript to create a type or interface to
      </li>
      <li>
        2. You are given an api route, which provides you with a list of books.
        Fetch the data and render them. The following properties should be
        displayed: <strong>name</strong>, <strong>categories</strong> and{" "}
        <strong>isbn</strong>. Use an <code>HTMLTableElement</code>
      </li>
      <li>
        3. As you might have noticed, there is some delay when fetching the
        data. Implement a functionality, so that it is apparent that loading is
        in progress.
      </li>
      <li>
        4. <strong>BONUS!</strong> Provide an option to filter the fetched
        books.
      </li>
      <li>
        5. <strong>BONUS!</strong> Alter the api endpoint to have random chance
        of returning a 500 status code. Make sure your frontend application
        doesn&apos;t break!
      </li>
    </ol>
  </div>
);
