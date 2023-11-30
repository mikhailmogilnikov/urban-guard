import { axiosInstance } from '@/utility/http';

const postFile = (eventId) => new Promise((res, rej) => {
  axiosInstance
    .post(`/api/file/${eventId}`)
    .then((response) => {
      const { data } = response;
      console.log(data);
      const file = {
        src: `data:image/${data.remote_path.split('.')[1]};base64,${data.file_data}`,
        name: data.remote_path,
      };

      res(file);
    })
    .catch((e) => {
      console.error('Error fetching posts:', e);
      rej(e);
    });
});

export default postFile;
