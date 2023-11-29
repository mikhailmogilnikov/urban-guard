export const postDataTransformer = (data = []) => {
  const transformData = [];

  data.forEach((item) => {
    transformData.push({
      id: item.event_id,
      type: item.event_name,
      date: new Date(item.event_timestamp),
      coordinates: item.coordinates.split('&'),
      address: item.address,
      image: null,
      state: item.event_state,
    });
  });

  return transformData;
};

export const postImageTransformer = () => {

};
