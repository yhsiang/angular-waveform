# angular-waveform

Waveform directive for Angular.js

# Usage 

## include script

````html
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular.min.js"></script>
<scrip src="//waveformjs.org/waveform.js"></script>
<script src="angular-waveform.js"></script>
<script>
  angular.module('YOUR_APP', [
    'ngWaveform'
  ]);
</script>

````
## html

```
<div ng-waveform="myWave" ></div>
```
OR
```
<div ng-waveform="myWave" width="500" height="80"></div>
```
## controller

```
  $scope.myWave = [...];
```

# Example

[Plunker Example](http://plnkr.co/edit/YhmlVinNJ8RYhxbLMQiX?p=preview)


# License

MIT
