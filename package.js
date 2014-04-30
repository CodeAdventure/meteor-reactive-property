Package.describe({
  summary: 'Your package summary here.'
});

Package.on_use(function(api) {

  // declare package dependencies
  api.use('deps', ['client', 'server']);

  // export the API
  api.export && api.export('ReactiveProperty');

  // add files for client and server
  api.add_files(
    ['source/ReactiveProperty.js'],
    ['client', 'server']
  );

});