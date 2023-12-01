import { axiosInstance } from '@/utility/http';

const deleteLastEvent = () => {
  axiosInstance.delete('/api/delete/last').then(() => {

  }).catch((e) => {
    console.error(e);
  });
};

export default deleteLastEvent;
