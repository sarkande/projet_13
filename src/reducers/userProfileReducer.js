const USER_PROFILE_STATE_DEFAULT = {
   _id: null,
   _email: null,
   _firstName: null,
   _lastName: null,
   _createdAt: null,
   _updatedAt: null,
};

const userProfileReducer = (state = USER_PROFILE_STATE_DEFAULT, action) => {
   switch (action.type) {
      case "USER_PROFILE":
         return {
            error: action.error,
            _id: action.id,
            _email: action.email,
            _firstName: action.firstName,
            _lastName: action.lastName,
            _createdAt: action.createdAt,
            _updatedAt: action.updatedAt,
         };
      case "USER_UPDATE_PROFILE":
         return {
            ...state,
            error: action.error,
            _firstName: action.firstName,
            _lastName: action.lastName,
         };
      case "USER_SIGNOUT":
         return USER_PROFILE_STATE_DEFAULT;
      default:
         return state;
   }
};

export default userProfileReducer;
