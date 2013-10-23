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
              , waveform = new Waveform({
                   container: element[0],
                   data: wave,
                   width: _width,
                   height: _height,
                });
          }
        });
      }
    }
  });

}(angular));