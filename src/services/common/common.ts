import { AxiosResponse } from 'axios';

interface IApiResponse {
  message?: string;
  data?: IApiResponse;
}

export const getErrorMessage = (
  apiResponse: AxiosResponse<IApiResponse, unknown>,
  defaultMessage = 'Some error occurred, please try again',
): string => {
  let errorMessage = defaultMessage;
  if (apiResponse) {
    if (apiResponse.data?.message) {
      errorMessage = apiResponse.data.message;
    } else if (apiResponse.data?.data && typeof apiResponse.data.data === 'string') {
      errorMessage = apiResponse.data.data;
    } else if (apiResponse.data?.data?.message) {
      errorMessage = apiResponse.data.data.message;
    }
  }
  return errorMessage;
};

export const processResponse = <T>(
  response: AxiosResponse<T, unknown>,
  errorMessage = 'Error while processing request',
  validStatus?: number,
): T | Error => {
  const statusCheckResp =
    validStatus && response
      ? response.status === validStatus
      : response.status >= 200 && response.status < 300;
  if (response?.data && statusCheckResp) {
    return response.data;
  }
  throw new Error(getErrorMessage(response, errorMessage));
};
