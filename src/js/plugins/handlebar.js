Handlebars.registerHelper('release', function (args) {
  if (!args) {
    args = args.slice(0, 4);
  }
  return new Handlebars.SafeString(args);
});
