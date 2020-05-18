import axios from 'axios'

const getApi = (url, param = {}) => {

  return new Promise((resolve, reject) => {
    axios.get(url).then((res) => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

export default getApi