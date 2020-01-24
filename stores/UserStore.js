import { observable, action } from 'mobx';


class UserStore {
  @observable name = null;

  constructor() {
    this.name = 'zee'
  }

}

export default UserStore;
