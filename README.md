# Full Width Menu with Equally Padded Elements using jQuery

An extremly simple jQuery plugin to create menu which sits on top of a container taking up its full width and has equally padded menu elements

## Motivation

- My first jQuery plugin

## Requirements

- [jQuery](http://jquery.com/)

## Usage (API)

The plugin is issued on the container for which the menu should take up the full width.

    $('#main-container').fullWidthMenu();

Settings are passed as an object literal.

    $('#main-container').fullWidthMenu({
      'menuItems'    : '#menu ul li', // The menu items selector. May also be passed as a jQuery object e.g. $('#menu ul li')
      'menuItemLink' : 'a'            // A child (selector) of the menuItems in which the text of the menu item is wrapped (usually a link tag I guess)
    });

## More

- [Visit the blog post](http://wp.me/p2r2o4-oi).
- Check out the [demo](http://showcase.smartcode.ch/full-width-menu-with-equally-padded-elements/).