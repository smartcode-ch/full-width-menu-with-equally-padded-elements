/**
 * Rico Leuthold <rico.leuthold@smartcode.ch>
 *
 * Pass a selector or a jQuery object with the items
 * that should sum up to the width the plugin is invoked on
 */

(function ($) {
    "use strict";
    $.fn.fullWidthMenu = function (options) {

        var spareWidth,
            textLength = 0,
            pseudoPadding = 0,
            restWidth = 0,
            itemsWidth = 0,
            menuWidth = this.outerWidth(),
            settings = $.extend({
                'menuItems' : '#menu ul li',
                'menuItemLink' : 'a'
            }, options),
            menuItems = $(settings.menuItems);

        // get item links text widths
        menuItems.each(function () {
            textLength += $(this).find(settings.menuItemLink).outerWidth();
        });

        spareWidth = menuWidth - textLength;
        pseudoPadding = spareWidth / menuItems.length;

        // calculate and set item width
        menuItems.each(function () {
            $(this).width(function () {
                return $(this).width() + Math.floor(pseudoPadding) - parseInt($(this).css('border-left-width'), 10) - parseInt($(this).css('border-right-width'), 10);
            });

        });

        menuItems.each(function () {
            itemsWidth += $(this).outerWidth();
        });

        restWidth = menuWidth - itemsWidth;

        // Compensate the pixels (decimals from rounding)
        if (restWidth % 2 === 0) {
            $(menuItems[0]).outerWidth(function () {
                return $(this).outerWidth() + (restWidth / 2);
            });
            $(menuItems[menuItems.length - 1]).outerWidth(function () {
                return $(this).outerWidth() + (restWidth / 2);
            });
        } else {
            $(menuItems[0]).outerWidth(function () {
                return $(this).outerWidth() + Math.ceil(restWidth / 2);
            });
            $(menuItems[menuItems.length - 1]).outerWidth(function () {
                return $(this).outerWidth() + Math.floor(restWidth / 2);
            });
        }

        return this;

    };
}(jQuery));
