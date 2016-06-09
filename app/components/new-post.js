import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,

  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    save() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        image: this.get('image'),
        detail: this.get('detail'),
      };
      this.set('addNewPost', false);
      this.sendAction('save', params);
    }
  }
});
