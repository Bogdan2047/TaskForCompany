import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GLOBAL_URL } from "../globalUrl";

export const dataApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${GLOBAL_URL}`,
  }),
  endpoints: (build) => ({
    getData: build.query({
      query: ({ limit, offset }) =>
        `/api/table/?limit=${limit}&offset=${offset}`,
    }),
  }),
});

export const { useGetDataQuery, useGetDataNextQuery } = dataApi;
