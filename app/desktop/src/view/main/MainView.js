Ext.define('ModernTunes.view.main.MainView', {
  extend: 'Ext.tab.Panel',
  xtype: 'mainview',
  requires: [
    'ModernTunes.view.main.MainViewController',
    'ModernTunes.view.main.MainViewModel',
    'ModernTunes.view.TunesView'
  ],
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
  tabBarPosition: 'bottom',
  items: [{
    title: "Thumbnails",
    xtype: 'tunesview',
    listeners: {
      select: 'onThumbSelect'
    },
    bind: {
      store: '{tunes}'
    }
  }, {
    title: "Grid",
    xtype: 'tunesgrid',
    listeners: {
      select: 'onGridSelect'
    },
    bind: {
      store: '{tunes}'
    }
  }]
  // [
  //   {
  //     xtype: 'component',
  //     html: '<a style="font-size:24px" target="_blank" href="https://docs-devel.sencha.com/extjs/6.7.0-CE/guides/quick_start/What_You_Will_Be_Coding.html">Quick Start Tutorial Here</a><p>'
  //   },
  //   {
  //     xtype: 'displayfield',
  //     reference: 'df',
  //     bind: {
  //       value: '{clickTime}'
  //     }
  //   },
  //   {
  //     xtype: 'button',
  //     text: 'Click Me!',
  //     handler: 'onButtonClick'
  //   }
  // ]
})
