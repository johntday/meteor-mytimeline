Package.describe({
  summary: "mytimeline"
});

Package.on_use(function (api) {
  api.add_files([
    'timeline.js',
    'timeline.css'
  ], 'client'
  );
});
