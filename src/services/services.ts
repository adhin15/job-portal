const url = ' https://dev6.dansmultipro.com/api/recruitment/positions.json'
const urlDetail = 'https://dev6.dansmultipro.com/api/recruitment/positions'

type payloadList = {
    page?: string | number,
    description?: string,
    location?: string,
    fulltime?:boolean
}
type payloadDetail = {
  id?: string
}

export const getPosition = async (payload: payloadList) => {
  try {
    const queryString = Object.entries(payload)
  .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
  .join('&');
    const response = await fetch(`${url}?${queryString}`, {
      method: "GET",
    });
    const responseData = await response.json();
    return Promise.resolve(responseData);
  } catch {}
};

export const getDetail = async (payload: payloadDetail) => {
  try {
    const response = await fetch(`${urlDetail}/${payload?.id}`, {
      method: "GET",
    });
    const responseData = await response.json();
    return Promise.resolve(responseData);
  } catch {}
};