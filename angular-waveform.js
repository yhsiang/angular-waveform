(function(angular, undefined) {
"use strict";

angular.module('ngWaveform', [])
  .directive('ngWaveform', function () {
    return {
      link: function (scope, element, attrs) {
        scope.$watch(attrs.ngWaveform, function (wave) {
          if(wave) {
            var _width = attrs.width || 960
              , _height = attrs.height || 100
              , _innercolor = attrs.innercolor || '#000'
              , _outercolor = attrs.outercolor || '#fff'
              , waveform = new Waveform({
                   container: element[0],
                   data: wave,
                   width: _width,
                   height: _height,
                   innerColor: _innercolor,
                   outerColor: _outercolor
                });
          }
        });
      }
    }
  });

}(angular));