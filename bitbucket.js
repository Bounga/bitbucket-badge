var Bitbucket = new Class({
  Implements: [Options, Events],
  options: {
    element: null,
    user: null,
    logo: true
  },
  initialize: function(id, options) {
    this.setOptions(options);
    this.options.element = $(id);
    this.attach();
  },
  attach: function() {
    new Request.JSONP({
      url: 'http://api.bitbucket.org/1.0/users/' + this.options.user + '/',
      onComplete: function(json) {
        this.user_info    = json.user;
        this.repositories = json.repositories;
        this.fireEvent("dataLoaded");
      }.bind(this)
    }).send();
  },
  populateDOM: function() {
    var display_name = this.user_info.display_name;
    var repositories = this.repositories;
    var options = this.options;

    var user_display_name = new Element("h2", {html: display_name, class: "display_name"});
    options.element.adopt(user_display_name);

    var repositories_list = new Element("ul", {class: "repositories"});
    repositories.each(function(item, index) {
      var li = new Element("li");

      if (options.logo) {
        var logo = new Element("img", {
          src: item.logo,
          alt: item.language,
          title: item.language
        });
        li.adopt(logo);
        li.set("html", li.get("html") + "&nbsp;");
      }

      var link = new Element("a", {
        html: item.name,
        href: "https://bitbucket.org/" + item.owner + "/" + item.slug,
        title: item.description
      });
      li.adopt(link);

      repositories_list.adopt(li);
    });

    this.options.element.adopt(repositories_list);
  }
});
