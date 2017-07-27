import Vue from 'vue';
import componentList from './modules';

//create a event but only focus on evnet dispatch
window.eventBus = new Vue();

// init App
var App = new Vue({
  el: '#app',
  data: {
    menuList: Object.keys(componentList).map( key => {return {title: componentList[key].title, viewName:key, isActive: false}; }).filter(item => item.title),
    currentView: 'home'
  },

  components: componentList
});

eventBus.$on('menuItemClicked', menuItem => {
  App.$data.currentView = menuItem.viewName;

  let activeItem = App.$data.menuList.filter(item => item.isActive)[0];
  if (activeItem) {
    activeItem.isActive = false;
  }
  menuItem.isActive = true;
});
