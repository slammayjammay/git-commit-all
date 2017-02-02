# `git-commit-all`

This package is not on NPM, so installation is [pretty tedious](https://github.com/npm/npm/issues/3055).
```sh
# clone the repo
$ git clone https://github.com/slammayjammay/git-commit-all.git
$ cd git-commit-all
# install dependencies
$ npm install
# generate tarball
$ npm pack
# install the generated tarball
$ npm install -g git-commit-all-X.X.X.tgz # XXX is the semantic version
```

# Usage
```sh
$ git-commit-all "Commit message" # Easy peasy.
```

Just a shortcut for
```sh
$ git add -A
$ git commit -m "Commit message"
```

And since `git-commit-all` takes _so long_ to type...
```sh
# In your .bash_profile
alias gall="git-commit-all"
```

```sh
$ gall "Commit everything!"
```
