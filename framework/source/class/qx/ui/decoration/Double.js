/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/**
 * Border implementation with two CSS borders. Both borders can be styled
 * independent of each other. This decorator is used to create 3D effects like
 * <code>inset</code>, <code>outset</code>, <code>ridge</code> or <code>groove</code>.
 * @deprecated{3.0}
 */
qx.Class.define("qx.ui.decoration.Double",
{
  extend : qx.ui.decoration.Decorator,


  /**
   * @param width {Integer} Width of the border
   * @param style {String} Any supported border style
   * @param color {Color} The border color
   * @param innerWidth {String} Width of the inner border
   * @param innerColor {Color} The inner border color
   */
  construct : function(width, style, color, innerWidth, innerColor)
  {
    this.base(arguments);

    // Initialize properties
    if (width != null) {
      this.setWidth(width);
    }

    if (style != null) {
      this.setStyle(style);
    }

    if (color != null) {
      this.setColor(color);
    }

    if (innerWidth != null) {
      this.setInnerWidth(innerWidth);
    }

    if (innerColor != null) {
      this.setInnerColor(innerColor);
    }

    if (qx.core.Environment.get("qx.debug")) {
      qx.log.Logger.deprecatedClassWarning(this.constructor,
       "Use 'qx.ui.decoration.Decorator' instead.");
    }
  }
});
