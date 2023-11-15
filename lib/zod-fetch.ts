export type Schema<TData> = {
  parse: (data: unknown) => TData;
};

/**
 * `zodFetch` takes in a schema of
 * the expected response, and the arguments to the fetcher
 * you provided.
 *
 * @example
 *
 * const response = await zodFetch(
 *   z.object({
 *     hello: z.string(),
 *   }),
 *   "https://example.com",
 * );
 */
export const zodFetch = async <TData>(
  schema: Schema<TData>,
  ...args: Parameters<typeof fetch>
) => {
  const response = await fetcher(...args);
  return schema.parse(response);
};

/**
 * A fetcher function that returns the data you'd like to parse
 * with the schema.
 */
export const fetcher = async (...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
};
