module.exports = function Ui (ui) {
    ui = Object.assign({}, ui);

    const topBarBackground = ui.topBarBackground || "#eeeeee"
    const bottomBarBackground = ui.bottomBarBackground || "#ebebeb"
    const nativeBackground = ui.nativeBackground || "#e1e1e1"
    const nativeHover = ui.nativeHover || "#c7c7c7"
    const nonNativeHover = ui.nonNativeHover || ui.nativeHover || "#c7c7c7"
    const nativeBorder = ui.nativeBorder || "#c7c7c7"
    const editorBackground = ui.editorBackground ||  "#282c34"
    const editorText = ui.editorText || "#b2b9c8"
    const editorWidgetBackground = ui.editorWidgetBackground || "#21252b"
    const editorSelectionBackground = ui.editorSelectionBackground || "#484e5b"
    const editorHighlightBackground = ui.editorHighlightBackground || "#314365"
    const editorInsertedBackground = ui.editorInsertedBackground || "#00809b" // "#00809b33"
    const editorLineHighlight = ui.editorLineHighlight || "#383e4a"
    const editorCursor = ui.editorCursor || "#f8f8f0"
    const editorWhitespaceForeground = ui.editorWhitespaceForeground || "#3b4048"
    const editorBorder = ui.editorBorder || "#181a1f"
    const editorRuler = ui.editorRuler || "#abb2bf" // "#abb2bf26"
    const tabActiveBackground = ui.tabActiveBackground || "#e1e1e1"
    const tabInactiveBackground = ui.tabInactiveBackground || "#c7c7c7"
    const tabBorder = ui.tabBorder || "#b1b1b1"
    const text = ui.text || "#444444"
    const highlightedText = ui.highlightedText || "#2387DC"
    const gitNew = ui.gitNew || "#709e19";
    const gitModified = ui.gitModified || "#dd6e14";
    const gitRemoved = ui.gitRemoved || "#9c3bdf";
    const gitIgnored = ui.gitIgnored || "#abb2bf";
    const gitConflict = ui.gitConflict || "#e10d0d";

    return {
        colors: {
            // more info: https://medium.com/@caludio/how-to-write-a-visual-studio-code-color-theme-from-scratch-7ccb7e5da2aa
            // more info: https://code.visualstudio.com/docs/getstarted/themes
            // more info: https://github.com/Microsoft/vscode/issues/3112
            // inspired by: https://github.com/fv0/native-ui/blob/master/styles/ui-variables.less
            "sideBar.background": nativeBackground,
            "sideBarSectionHeader.background": nativeBackground,
            "sideBar.border": nativeBorder,
            "sideBar.foreground": text,
            "sideBarTitle.foreground": text,
            "statusBar.noFolderForeground": text,
            "list.hoverBackground": nativeHover,
            "list.activeSelectionBackground": nativeHover,
            "list.inactiveSelectionBackground": nativeHover, // file explorer bg
            "list.focusBackground": nonNativeHover, // cmd+shift+p bg
            "list.activeSelectionForeground": text,
            "list.inactiveSelectionForeground": text,
            "list.highlightForeground": highlightedText,
            "titleBar.activeBackground": topBarBackground,
            "titleBar.inactiveBackground": topBarBackground,
            "statusBar.background": bottomBarBackground,
            "statusBar.foreground": text,
            "statusBarItem.hoverBackground": nativeHover,
            "tab.activeBackground": tabActiveBackground,
            "tab.inactiveBackground": tabInactiveBackground,
            "tab.activeForeground": text,
            "tab.inactiveForeground": text,
            "tab.unfocusedInactiveForeground": text,
            "editorGroupHeader.tabsBackground": tabInactiveBackground,
            "editorGroupHeader.tabsBorder": tabBorder,
            "editorGroup.background": editorBorder,
            "editorGroup.border": editorBorder,
            "tab.border": tabBorder,
            "editor.background": editorBackground,
            "editor.foreground": editorText,
            "editorWidget.background": editorWidgetBackground,
            "editor.selectionBackground": editorSelectionBackground,
            "editor.selectionHighlightBackground": editorSelectionBackground,
            "editor.findMatchHighlightBackground": editorHighlightBackground,
            "editorHoverWidget.background": editorWidgetBackground,
            "editorHoverWidget.border": editorBorder,
            "diffEditor.insertedTextBackground": editorInsertedBackground,
            "editor.lineHighlightBackground": editorLineHighlight,
            "editorCursor.foreground": editorCursor,
            "editorWhitespace.foreground": editorWhitespaceForeground,
            "editorIndentGuide.background": editorWhitespaceForeground,
            "editorLineNumber.foreground": "#495162",
            "editorRuler.foreground": editorRuler,
            "editorError.foreground": "#c24038",
            "editorMarkerNavigation.background": editorWidgetBackground,
            "editorSuggestWidget.background": editorWidgetBackground,
            "editorSuggestWidget.border": editorBorder,
            "editorSuggestWidget.selectedBackground": "#2c313a",
            "editor.wordHighlightBackground": editorSelectionBackground,
            "editor.wordHighlightStrongBackground": editorRuler,
            "peekViewEditor.matchHighlightBackground": "#29244b",
            "gitDecoration.untrackedResourceForeground": gitNew,
            "gitDecoration.modifiedResourceForeground": gitModified,
            "gitDecoration.deletedResourceForeground": gitRemoved,
            "gitDecoration.ignoredResourceForeground": gitIgnored,
            "gitDecoration.conflictingResourceForeground": gitConflict


            // "input.background": "#1d1f23",
            // "dropdown.background": "#1d1f23",
            // "dropdown.border": editorBorder,
            // "list.focusBackground": nativeBorder,
            // "list.activeSelectionBackground": nativeBorder,
            // "list.activeSelectionForeground": "#444444",
            // "list.inactiveSelectionBackground": nativeBorder,
            // "list.inactiveSelectionForeground": "#444444",
            // "list.hoverBackground": nativeBorder,
            // "list.highlightForeground": "#000000",
            // "pickerGroup.foreground": "#009cfe",
            // "button.background": "#404754",
            // "badge.background": editorBackground,
            // "scrollbarSlider.background": "#4e566680",
            // "scrollbarSlider.hoverBackground": "#5a637580",
            // "scrollbarSlider.activeBackground": "#747d9180",
            // "editor.background": editorBackground,
            // "editorWidget.background": editorWidgetBackground,
            // "editor.selectionBackground": editorSelectionBackground,
            // "editor.selectionHighlightBackground": editorSelectionBackground,
            // "editor.findMatchHighlightBackground": editorHighlightBackground,
            // "editorHoverWidget.background": editorWidgetBackground,
            // "editorHoverWidget.border": editorBorder,
            // "diffEditor.insertedTextBackground": editorInsertedBackground,
            // "editor.lineHighlightBackground": editorLineHighlight,
            // "editorCursor.foreground": editorCursor,
            // "editorWhitespace.foreground": editorWhitespaceForeground,
            // "editorIndentGuide.background": editorWhitespaceForeground,
            // "editorLineNumber.foreground": "#495162",
            // "editorRuler.foreground": "#abb2bf26",
            // "editorError.foreground": "#c24038",
            // "editorMarkerNavigation.background": editorWidgetBackground,
            // "editorSuggestWidget.background": editorWidgetBackground,
            // "editorSuggestWidget.border": editorBorder,
            // "editorSuggestWidget.selectedBackground": "#2c313a",
            // "editor.wordHighlightBackground": editorSelectionBackground,
            // "editor.wordHighlightStrongBackground": "#abb2bf26",
            // "peekViewEditor.matchHighlightBackground": "#29244b",
            // "tab.activeBackground": nativeBackground,
            // "tab.inactiveBackground": nativeBorder,
            // "tab.border": tabBorder,
            // "tab.activeForeground": "#444444",
            // "tab.inactiveForeground": "#444444",
            // "tab.unfocusedInactiveForeground": "#444444",
            // "editorGroup.background": editorBorder,
            // "editorGroupHeader.tabsBackground": nativeBorder,
            // "editorGroupHeader.tabsBorder": tabBorder,
            // "editorGroup.border": editorBorder,
            // "statusBar.foreground": "#444444",
            // "statusBar.noFolderForeground": "#444444",
            // "statusBar.background": "#ebebeb",
            // "statusBar.noFolderBackground": editorWidgetBackground,
            // "statusBarItem.hoverBackground": "#2c313a",
            // "activityBar.background": "#2f333d",
            // "activityBar.foreground": "#d7dae0",
            // "activityBarBadge.background": "#4d78cc",
            // "activityBarBadge.foreground": "#f8fafd",
            // "sideBar.background": nativeBackground,
            // "sideBar.foreground": "#444444",
            // "sideBar.border": nativeBorder,
            // "sideBarTitle.foreground": "#444444",
            // "sideBarSectionHeader.background": nativeBackground,
            // "titleBar.activeForeground": "#9da5b4",
            // "titleBar.inactiveForeground": "#6b717d",
            // "titleBar.activeBackground": "#eeeeee",
            // "titleBar.inactiveBackground": "#eeeeee",
            // "notification.background": editorWidgetBackground,
            // "debugToolBar.background": editorWidgetBackground,
            // "statusBar.debuggingBackground": editorWidgetBackground

            // "gitDecoration.modifiedResourceForeground": Color for modified git resources. Used file labels and the SCM viewlet.
            // "gitDecoration.deletedResourceForeground": Color for deleted git resources. Used file labels and the SCM viewlet.
            // "gitDecoration.untrackedResourceForeground": Color for untracked git resources. Used file labels and the SCM viewlet.
            // "gitDecoration.ignoredResourceForeground": Color for ignored git resources. Used file labels and the SCM viewlet.
            // "gitDecoration.conflictingResourceForeground": Color for conflicting git resources. Used file labels and the SCM viewlet.
        }
    }
}

