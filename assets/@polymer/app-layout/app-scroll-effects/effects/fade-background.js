/// BareSpecifier=@polymer/app-layout/app-scroll-effects/effects/fade-background
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '../app-scroll-effects-behavior.js';

import { registerEffect } from '../../helpers/helpers.js';
/**
 * Upon scrolling past a threshold, fade in the rear background layer and fade
 * out the front background layer (opacity CSS transitioned over time).
 *
 *
 */
registerEffect('fade-background', {
  /** @this Polymer.AppLayout.ElementWithBackground */
  setUp: function setUp(config) {
    var fx = {};
    var duration = config.duration || '0.5s';
    fx.backgroundFrontLayer = this._getDOMRef('backgroundFrontLayer');
    fx.backgroundRearLayer = this._getDOMRef('backgroundRearLayer');
    fx.backgroundFrontLayer.style.willChange = 'opacity';
    fx.backgroundFrontLayer.style.webkitTransform = 'translateZ(0)';
    fx.backgroundFrontLayer.style.transitionProperty = 'opacity';
    fx.backgroundFrontLayer.style.transitionDuration = duration;
    fx.backgroundRearLayer.style.willChange = 'opacity';
    fx.backgroundRearLayer.style.webkitTransform = 'translateZ(0)';
    fx.backgroundRearLayer.style.transitionProperty = 'opacity';
    fx.backgroundRearLayer.style.transitionDuration = duration;
    this._fxFadeBackground = fx;
  },
  /** @this Polymer.AppLayout.ElementWithBackground */
  run: function run(p, y) {
    var fx = this._fxFadeBackground;
    if (p >= 1) {
      fx.backgroundFrontLayer.style.opacity = 0;
      fx.backgroundRearLayer.style.opacity = 1;
    } else {
      fx.backgroundFrontLayer.style.opacity = 1;
      fx.backgroundRearLayer.style.opacity = 0;
    }
  },
  /** @this Polymer.AppLayout.ElementWithBackground */
  tearDown: function tearDown() {
    delete this._fxFadeBackground;
  }
});