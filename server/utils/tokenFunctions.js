const deserialize = string => {
  return new Buffer(string, 'base64').toString('utf8');
};

const serialize = (client_id, item_id, institution_type) => {
  return new Buffer(
    client_id + ',' + item_id + ',' + institution_type,
    'utf8'
  ).toString('base64');
};

export { deserialize, serialize };