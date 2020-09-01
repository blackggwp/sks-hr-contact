import axios from 'axios';

export const onGetEmpData = async (action) => {
  switch (action.method) {
    case 'get':
      // const url = 'http://223.27.210.251/test/api/emp/q_contact.php?req=getemp';
      const url = 'http://192.168.0.251:1000/emps';
      try {
        const result = await axios(url);
        const res = result.data[0]
        return res;
      }
      catch (e) {
        console.error("ContactHQAPI Error: ", e);
        return e;
      }
      // break;

    case 'update':
      const urlUpdate = 'http://223.27.210.251/test/api/emp/q_contact.php?req=updateemp';
      const param = {
        newData: action.updateVal.newData,
        id: action.updateVal.oldData.id
      };
      console.log(param)

      try {
        const result2 = await axios.post(urlUpdate, param);
        const res2 = result2
        console.log(res2);
        return res2;
      }
      catch (e) {
        console.error("ContactHQUpdateAPI Error: ", e);
        return e;
      }
      // break;

    default:
      break;
  }
};

export const onGetOutletData = async () => {

  // const url = 'http://223.27.210.251/test/api/emp/q_contact.php?req=outlet'
  const url = 'http://192.168.0.251:1000/emps/outlets';
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