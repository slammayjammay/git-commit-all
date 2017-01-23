#!/usr/bin/env node

const execSync = require('child_process').execSync

let args = process.argv.slice(2)

if (args.length < 1) {
	throw new Error('No commit message specified.')
	process.exit()
} else if (args.length > 1) {
	throw new Error('More than one commit message given.')
	process.exit()
}

let commitMessage = args[0]

execSync(`git add -A && git commit -m "${commitMessage}"`)
