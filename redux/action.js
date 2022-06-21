export const INC_COUNT = 'INC_COUNT';
export const USERS = 'USERS';

const APIURL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () => {
  try {
    return async dispatch => {
      const userdRecord = await fetch(APIURL, {
        mathod: 'GET',
        headers: {'Content-Type': 'application/json'},
      });
      const json = await userdRecord.json();
      let usersArray = [];
      json.forEach(element => {
        // console.log(element.name);
        usersArray.push(element.name);
      });
      if (json) {
        dispatch({type: USERS, payload: usersArray});
      } else {
        console.log('ERROR ');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const increaseCount = count => dispatch => {
  dispatch({
    type: INC_COUNT,
    payload: count,
  });
};
