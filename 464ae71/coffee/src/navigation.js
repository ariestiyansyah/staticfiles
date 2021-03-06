// Generated by CoffeeScript 1.6.1
(function() {

  this.Navigation = (function() {

    function Navigation() {
      var active;
      if ($('#accordion').length) {
        active = $('#accordion ul:has(li.active)').index('#accordion ul');
        if (active < 0) {
          active = $('#accordion h3.active').index('#accordion h3');
        }
        if (active < 0) {
          active = 0;
        }
        $('#accordion').bind('accordionchange', this.log).accordion({
          active: active,
          header: 'h3',
          autoHeight: false,
          heightStyle: 'content'
        });
        $('#accordion .ui-state-active').closest('.chapter').addClass('is-open');
        $('#open_close_accordion a').click(this.toggle);
        $('#accordion').show();
        $('#accordion a').click(this.setChapter);
      }
    }

    Navigation.prototype.log = function(event, ui) {
      return Logger.log('accordion', {
        newheader: ui.newHeader.text(),
        oldheader: ui.oldHeader.text()
      });
    };

    Navigation.prototype.toggle = function() {
      return $('.course-wrapper').toggleClass('closed');
    };

    Navigation.prototype.setChapter = function() {
      $('#accordion .is-open').removeClass('is-open');
      return $(this).closest('.chapter').addClass('is-open');
    };

    return Navigation;

  })();

}).call(this);
