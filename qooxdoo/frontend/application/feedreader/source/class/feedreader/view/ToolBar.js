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
     * Fabian Jakobs (fjakobs)
     * Sebastian Werner (wpbasti)
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/* ************************************************************************

#embed(qx.icontheme/22/actions/dialog-ok.png)
#embed(qx.icontheme/22/actions/dialog-cancel.png)
#embed(qx.icontheme/22/actions/help-about.png)
#embed(qx.icontheme/22/actions/view-refresh.png)
#embed(qx.icontheme/22/apps/preferences-theme.png)
#embed(qx.icontheme/22/apps/preferences-locale.png)

#asset(qx/icon/Oxygen/22/actions/dialog-ok.png)
#asset(qx/icon/Oxygen/22/actions/dialog-cancel.png)
#asset(qx/icon/Oxygen/22/actions/help-about.png)
#asset(qx/icon/Oxygen/22/actions/view-refresh.png)
#asset(qx/icon/Oxygen/22/apps/preferences-theme.png)
#asset(qx/icon/Oxygen/22/apps/preferences-locale.png)

************************************************************************ */

qx.Class.define("feedreader.view.ToolBar",
{
  extend : qx.ui.toolbar.ToolBar,

  construct : function(controller)
  {
    this.base(arguments);
    
    // Apply style
    this.setDecorator("line-bottom");

    // Link for controller
    this._controller = controller;

    // Define commands /////////////
    var reloadCmd = new qx.event.Command("Control+R");
    reloadCmd.addListener("execute", this._controller.reload, this._controller);

    var aboutCmd = new qx.event.Command("F1");
    aboutCmd.addListener("execute", this._controller.showAbout, this._controller);

    var prefCmd = new qx.event.Command("Control+P");
    prefCmd.addListener("execute", this._controller.showPreferences, this._controller);

    var addFeedCmd = new qx.event.Command("Control+A");
    addFeedCmd.addListener("execute", this._controller.showAddFeed, this._controller);

    var removeFeedCmd = new qx.event.Command("Control+D");
    removeFeedCmd.addListener("execute", this._controller.showRemoveFeed, this._controller);
    // /////////////////////////////
    
    // Add buttons /////////////////
    var addBtn = new qx.ui.toolbar.Button("Add feed", "icon/22/actions/dialog-ok.png");
    addBtn.setCommand(addFeedCmd);
    this.add(addBtn);

    var removeBtn = new qx.ui.toolbar.Button("Remove feed", "icon/22/actions/dialog-cancel.png");
    removeBtn.setCommand(removeFeedCmd);
    this.add(removeBtn);
    
    // Add a sepearator
    this.add(new qx.ui.toolbar.Separator());

    var reloadBtn = new qx.ui.toolbar.Button("Reload", "icon/22/actions/view-refresh.png");
    reloadBtn.setCommand(reloadCmd);
    reloadBtn.setToolTip(new qx.ui.popup.ToolTip("Reload the feeds. (" + reloadCmd.toString() + ")"));
    this.add(reloadBtn);
    
    // Add a sepearator
    this.add(new qx.ui.toolbar.Separator());    

    var prefBtn = new qx.ui.toolbar.Button("Preferences", "icon/22/apps/preferences-theme.png");
    prefBtn.setCommand(prefCmd);
    prefBtn.setToolTip(new qx.ui.popup.ToolTip("Open preferences window."));
    this.add(prefBtn);

    // Add a spacer
    this.addSpacer();

    var about_btn = new qx.ui.toolbar.Button("Help", "icon/22/actions/help-about.png");
    about_btn.setCommand(aboutCmd);
    about_btn.setToolTip(new qx.ui.popup.ToolTip("(" + aboutCmd.toString() + ")"));
    this.add(about_btn);
    // /////////////////////////////
  }
  
});
