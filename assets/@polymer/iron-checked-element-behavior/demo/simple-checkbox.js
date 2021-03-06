/// BareSpecifier=@polymer/iron-checked-element-behavior/demo/simple-checkbox
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '../../polymer/polymer-legacy.js';
import '@polymer/paper-button/paper-button.js';

import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
import { html } from '../../polymer/lib/utils/html-tag.js';

import { IronCheckedElementBehavior } from '../iron-checked-element-behavior.js';

Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }

      :host([invalid]) span {
        color: red;
      }

      #labelText {
        display: inline-block;
        width: 100px;
      }
    </style>

    <input type="checkbox" id="checkbox" on-tap="_onCheckTap">
    <span id="labelText">{{label}}</span>
    <paper-button raised on-click="_onClick">validate</paper-button>
`,

  is: 'simple-checkbox',
  behaviors: [IronCheckedElementBehavior],
  properties: { label: { type: String, value: 'not validated' } },

  _onCheckTap: function () {
    this.checked = this.$.checkbox.checked;
  },

  _onClick: function () {
    this.validate();
    this.label = this.invalid ? 'is invalid' : 'is valid';
  }
});