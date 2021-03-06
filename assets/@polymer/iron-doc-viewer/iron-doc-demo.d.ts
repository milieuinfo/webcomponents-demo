/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-doc-demo.js
 */

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

interface IronDocDemoElement extends LegacyElementMixin, HTMLElement {
  demo: object|null|undefined;
  srcPrefix: string|null|undefined;
  readonly title: any;
  _computeTitle(demo: any): any;
}

export {IronDocDemoElement};

declare global {

  interface HTMLElementTagNameMap {
    "iron-doc-demo": IronDocDemoElement;
  }
}
