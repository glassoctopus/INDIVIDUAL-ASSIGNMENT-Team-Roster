import { clientCredentials } from '../utils/client';
// API CALLS FOR memberS

const endpoint = clientCredentials.databaseURL;

const getMembers = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/members.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// TODO: DELETE member
const deleteMember = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/members/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

// TODO: GET SINGLE member
const getSingleMember = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/members/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: CREATE member
const createMember = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/members.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: UPDATE member
const updateMember = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/members/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO
// const getMembersByTeam = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/members.json?orderBy="Team_id"&equalTo="${firebaseKey}"`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(Object.values(data)))
//     .catch(reject);
// });

export {
  getMembers,
  createMember,
  deleteMember,
  getSingleMember,
  updateMember,
};
