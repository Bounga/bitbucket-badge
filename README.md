# Bitbucket Badge

Bitbucket Bagde is a tiny Javascript library written in MooTools to retrieve info about a [Bitbucket](https://bitbucket.org/) user and its repositories. It requires MooTools >= 1.2 and MooTools More for JSONP.

## Features

Bitbucket features are:

* Dead simple to use
* Tiny library
* Multiple instances
* Callbacks
* Fully customizable using CSS
* Ability to use a custom displaying function
* Works on Safari, Firefox, IE 6+, Chrome and Opera
* Open source, full code is available on BitBucket

Download
--------

* Full code is available from [BitBucket](http://www.bitbucket.org/Bounga/bitbucket-badge). If you want to fix bugs or add features, it's the best way to start with
* Full code is also available from a [zip file](http://www.bitbucket.org/Bounga/bitbucket-badge/get/tip.zip)

Usage Example
-------------

Drop **mootools**, **mootools-more** and **bitbucket.js** in your javascripts directory and include it in your XHTML layout :

    <script src="javascripts/mootools.js" type="text/javascript" charset="utf-8"></script>
    <script src="javascripts/mootools-more.js" type="text/javascript" charset="utf-8"></script>
    <script src="javascripts/bitbucket.js" type="text/javascript" charset="utf-8"></script>

then you can create new Bitbucket Badge instances :

    var badge = new Bitbucket('badge', {
        'user': 'Bounga'
    });

    badge.addEvent("dataLoaded", function() {
      this.populateDOM();
    });

Take a look at 'example' directory to see examples.

Options
-------

Available options to tune your Bitbucket Badge are:

    element: 'badge' // id of DOM element to populate with user's info
    user: 'Bounga'   // Bitbucket username you want to retrieve info
    logo: true       // Prepend an image representing language used in front of repo names

Events
------

Available events fired by Bitbucket Badges are:

    dataLoaded // Fired when data for user has been successfully retrieved

Other
-----

For more information see [Project homepage](http://www.bitbucket.org/Bounga/bitbucket-badge/)

Problems, comments, and suggestions are welcome on the [ticket system](http://www.bitbucket.org/Bounga/bitbucket-badge/issues/new/)


Copyright (c) 2013 Nicolas Cavigneaux, released under the [MIT license](http://creativecommons.org/licenses/MIT/)
