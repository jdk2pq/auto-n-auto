# runn

Run `n auto`, but only if you need to. [Read more about it here](https://neemzy.org/articles/automatically-switching-node-js-version-upon-cd-with-n)!

## How it works

Running this script will try to read a Node.js version constraint from the closest `package.json` file in the tree, match the current version against it, and run `n auto` if they do not match.

It needs to receive a path to a file containing all available Node.js versions as an argument; this file can easily be generated with `n ls-remote --all`.

This is meant to be ran upon `cd` to switch automatically while keeping it fast.

## Setup

```sh
$ npm i
```

In `.zshrc` (for example):

```sh
autoload -U add-zsh-hook
n ls-remote --all > path/to/.node-versions

switch-node-version() {
  node path/to/runn path/to/.node-versions
}

add-zsh-hook chpwd switch-node-version
switch-node-version
```
