import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


window.addEventListener('load', function() {
        window.doppler.init(function(bandwidth) {
          var threshold = 7;
          if (bandwidth.left > threshold || bandwidth.right > threshold) {
            var scale    = 5;
            var baseSize = 100;
            var diff = bandwidth.left - bandwidth.right;
            var dimension = (baseSize + scale*diff) + 'px';
            document.getElementById('box').style.width  = dimension;
            document.getElementById('box').style.height = dimension;
            console.log("left: " + bandwidth.left + " right: " + bandwidth.right);
          }
        });
      });