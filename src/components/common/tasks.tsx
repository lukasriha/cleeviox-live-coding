import type { FunctionComponent } from "react";

export const Tasks: FunctionComponent = () => (
  <div className="flex-1">
    <h2 className="mb-3 uppercase underline size-4">Tasks</h2>
    <ol className="flex flex-col gap-3">
      <li>
        1. In the <code>data</code> directory, you can see an array of books.
        Use typescript to create a type or interface to
      </li>
      <li>
        2. You are provided an api route, which provides you with a list of
        books. Fetch the data and render them. You decide how you want them to
        be displayed, however you must display the name, the genres, and the
        isbn.
      </li>
      <li>
        3. As you might have noticed, there is some delay when fetching the
        data. Implement a functionality, so that it is apparent that loading is
        in progress. Also, while loading, it should not be possible to send
        further requests.
      </li>
      <li>4. BONUS! Provide an option to filter the fetched books.</li>
    </ol>
  </div>
);
