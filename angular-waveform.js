(function(angular, undefined) {
"use strict";

angular.module('ngWaveform', [])
  .directive('ngWaveform', function () {
    return {
      link: function (scope, element, attrs) {
        var _width = attrs.width || element.parent().width()
        , _height = attrs.height || element.parent().height()
        , _innercolor = attrs.innercolor || '#000'
        , _outercolor = attrs.outercolor || '#fff'
        , waveform = new Waveform({
            container: element[0],
            width: _width,
            height: _height,
            innerColor: _innercolor,
            outerColor: _outercolor
          });
        scope.$watch(attrs.ngWaveform, function (wave) {
          if(wave) {
            waveform.update({data: wave});
          }
        });
      }
    }
  });

}(angular));