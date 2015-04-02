
/**
 * @file
 * stacktable.module.js
 */

 (function($) {

  Drupal.behaviors.stacktable = {
    attach: function(context, settings) {
      var table = $("table");

      $(table).stacktable({myClass:'your-class-name'});
    }
  };

}(jQuery));
