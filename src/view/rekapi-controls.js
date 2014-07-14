define([

  'underscore'
  ,'backbone'
  ,'rekapi-scrubber'

  ,'src/constants'

], function (

  _
  ,Backbone
  ,RekapiScrubber

  ,constant

) {

  return Backbone.View.extend({

    /**
     * @param {Object} opts
     *   @param {Stylie} stylie
     *   @param {jQuery} $canvasBG
     */
    'initialize': function (opts) {
      this.stylie = opts.stylie;
      this.$canvasBG = opts.$canvasBG;
      this.scrubber = new RekapiScrubber(this.stylie.rekapi, this.$canvasBG[0]);
      this.$el = this.scrubber.$container;
      this.el = this.scrubber.$container[0];
    }

    ,'fadeToggle': function () {
      this.$el.fadeToggle(constant.TOGGLE_FADE_SPEED);
    }

  });

});
