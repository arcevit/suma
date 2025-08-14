import { useMutation, useQuery } from "@tanstack/react-query";
import axiosClient from "./axiosClient";
import type {
  QueryFunctionContext,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
} from "@tanstack/react-query";
import type { AxiosError, AxiosInstance } from "axios";

type AuthQueryOptions<
  TQueryFnData,
  TError,
  TData,
  TQueryKey extends QueryKey
> = Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, "queryFn"> & {
  queryFn: () => Promise<TQueryFnData>;
};

export function useAuthQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  fetcher: (
    axiosInstanceWithAuth: AxiosInstance,
    queryFnContext?: QueryFunctionContext<QueryKey, TQueryKey>
  ) => TQueryFnData | Promise<TQueryFnData>,
  options: Omit<
    AuthQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    "queryFn" | "queryKey"
  > = {}
) {
  const queryFn = () => fetcher(axiosClient);
  return useQuery({
    queryKey,
    queryFn,
    ...options,
  });
}

type ApiError = {
  message: string;
  code?: string;
};

export function useAuthMutation<TData, TVariables>(
  endpoint: string,
  options?: UseMutationOptions<TData, AxiosError<ApiError>, TVariables>
): UseMutationResult<TData, AxiosError<ApiError>, TVariables> {
  return useMutation<TData, AxiosError<ApiError>, TVariables>({
    mutationFn: async (variables: TVariables) => {
      const response = await axiosClient.post<TData>(endpoint, variables, {
        withCredentials: true, // often needed for auth
      });
      return response.data;
    },
    ...options,
  });
}
