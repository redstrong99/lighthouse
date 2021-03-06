/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * @fileoverview Ensures `<iframe>` and `<frame>` elements contain a non-empty title attribute.
 * See base class in axe-audit.js for audit() implementation.
 */

const AxeAudit = require('./axe-audit');

class FrameTitle extends AxeAudit {
  /**
   * @return {!AuditMeta}
   */
  static get meta() {
    return {
      category: 'Accessibility',
      name: 'frame-title',
      description: '`<frame>` or `<iframe>` elements have a title.',
      failureDescription: '`<frame>` or `<iframe>` elements do not have a title.',
      helpText: 'Screen reader users rely on frame titles to describe the contents of frames. ' +
          '[Learn more](https://dequeuniversity.com/rules/axe/2.2/frame-title?application=lighthouse).',
      requiredArtifacts: ['Accessibility']
    };
  }
}

module.exports = FrameTitle;
