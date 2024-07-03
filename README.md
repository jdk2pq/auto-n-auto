# auto-n-auto

A modified version of [runn](https://github.com/neemzy/runn) by [neemzy](https://github.com/neemzy)

Uses the [n](https://github.com/tj/n) Node.js version manager to switch Node.js versions automatically.

Run `n auto` automatically while changing directories with `zsh`, but only if you need to according to [node-semver](https://github.com/npm/node-semver).

## How it works

This is meant to be run upon `cd` to switch automatically while keeping it fast. I use `zsh` hooks to run the script on every directory change (configuration below).

Running this script will try to read a Node.js version from a `.n-node-version` file in the working directory, match the current version of Node against it, and run `n auto` if they do not match.

## Setup

Pre req: make sure `n` is installed of course.

```sh
git clone git@github.com:jdk2pq/auto-n-auto.git
pnpm i
```

Add the following to your `.zshrc`:

```sh
autoload -U add-zsh-hook

auto-n-auto() {
  node path/to/auto-n-auto
}

add-zsh-hook chpwd auto-n-auto
auto-n-auto
```
Finally, run `source .zshrc` or restart your terminal, and it should work!