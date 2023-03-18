# Native UI Themes for VS Code

I really liked the [native-ui](https://github.com/fv0/native-ui) theme for Atom, so ported it to vscode. I never got it to a point where I felt it was worthy of publishing to VS Code extensions, so consider it _as-is_. It works well enough for me, although there are occasionally some contrast issues outside of the editor.


### Installing this locally

The following will build the themes, and copy them to `~/.vscode/extensions`.

```Shell
git clone
pnpm run buildAndCopy
# then restart VSCodep
```

### Removing this extension

The following will remove this extension from `~/.vscode/extensions`.

```Shell
pnpm run remove
# then restart VSCode
```

## The Themes

### Native UI - Seti

![native-ui-seti screenshot](screenshots/native-ui-seti.png)

### Native UI - One Dark

![native-ui-onedark screenshot](screenshots/native-ui-onedark.png)

### Native UI - geob0t

![native-ui-geob0t screenshot](screenshots/native-ui-geob0t.png)

### Native UI - geob0t (Dark)

![native-ui-geob0t-dark screenshot](screenshots/native-ui-geob0t-dark.png)

### Native UI - geob0t (Dim)

I like this one at night.

![native-ui-geob0t-dim screenshot](screenshots/native-ui-geob0t-dim.png)

### Native UI - Decks

This one is high contrast. I like it for presentations.

![native-ui-decks screenshot](screenshots/native-ui-decks.png)