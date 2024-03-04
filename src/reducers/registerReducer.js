export default function registerReducer(data, action) {
    switch (action.type) {
      case 'updateFirstName': {
        data['firstName'] = action.firstName;
        return data;
      }
      case 'updateSecondName': {
        data['secondName'] = action.firstName;
        return data;
      }
      case 'updateEmail': {
        data['email'] = action.email;
        return data;
      }
      case 'updateBirthDate': {
        data['birthDate'] = action.birthDate;
        return data;
      }
      case 'updateGender':{
        data['gender'] = action.gender;
        return data;
      }
      case 'updatePassword':{
        data['password'] = action.password;
        return data;
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  