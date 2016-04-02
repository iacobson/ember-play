//import and export the friends base controller
import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    cancel() {
      this.transitionToRoute('friends.index');
      return false;
    }
  }
});
