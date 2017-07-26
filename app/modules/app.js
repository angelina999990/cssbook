import Vue from 'vue';
import componentList from './modules';

//create a event but only focus on evnet dispatch
window.eventBus = new Vue();

// init App
var App = new Vue({
  el: '#app',
  data: {
    menuList: Object.keys(componentList).map( key => { return {title: componentList[key].title, viewName:key}; } ).filter(item => item.title),
    currentView: ''
  },

  components: componentList
});

eventBus.$on('menuItemClicked', menuItem => {
  App.$data.currentView = menuItem.viewName;
});
