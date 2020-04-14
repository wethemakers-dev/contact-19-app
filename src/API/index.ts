import {Device} from '../Action/types';

export const createDevice = async <T>(device: Device): Promise<T> => {
  return fetch(`SERVER_API`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(device),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  });
};

export const updateDevice = async <T>(
  device: Device,
  id?: string,
): Promise<T> => {
  return fetch(`SERVER_API`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(device),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  });
};

export const verifyCode = async (
  code: number,
  device?: Device,
): Promise<boolean> => {
  return fetch(`SERVER_API`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({code}),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  });
};

export const getCountry = async (): Promise<{country: string; ip: string}> => {
  const returnData = {country: '', ip: ''};

  return fetch(`https://api.ipify.org`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.text();
    })
    .then(async (ip) => {
      returnData.ip = ip;

      return fetch(`https://geolocation-db.com/json/${ip}`);
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    })
    .then((data: {country_code: string}) => {
      returnData.country = data.country_code;

      return returnData;
    });
};

export const getCountryStats = async <T>(country?: string): Promise<T> => {
  return fetch(`https://corona-api.com/countries/${country}`).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  });
};
