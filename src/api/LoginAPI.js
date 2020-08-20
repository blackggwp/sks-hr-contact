import axios from 'axios';

export const onAuthenticate = async (username) => {

    const url =
    'http://192.168.0.251/test/api/matmg/service.php?req=login&search=' + username
          try {
            const result = await axios(url);
            const res = result.data.loginData
            return res;
          } 
            catch(e) {
            console.error("LoginApi Error: ", e);
            return e;
          }
};