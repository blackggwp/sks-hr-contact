import axios from 'axios';
import '../config'
export const onGetEmpData = async (action) => {
  switch (action.method) {
    case 'get':
      const url = `${global.config.apiUrl}/emps`
      try {
        const result = await axios(url);
        const res = result.data[0]
        return res;
      }
      catch (e) {
        console.error("ContactHQAPI Error: ", e);
        return e;
      }
    default:
      break;
  }
};

export const onGetOutletData = async () => {

  const url = `${global.config.apiUrl}/emps/outlets`;

  try {
    const result = await axios(url);
    const res = result.data[0]
    return res;
  }
  catch (e) {
    console.error("ContactOutletAPI Error: ", e);
    return e;
  }
};