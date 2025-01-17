#!/usr/bin/env node

var packageMsi = require('./')
var path = require('path')

var opts = require("nomnom")
   .script("msi-packager")
   .options({

    'source': {
      position: 0,
      help: 'Directory containing app to package',
      required: true
    },

    'output': {
      position: 1,
      help: 'write output .msi to this path',
      required: true
    },

    'name': {
      abbr: 'n',
      required: true
    },
    'version': {
      abbr: 'v',
      help: 'Specify application version',
      required: true
    },

    'manufacturer': {
      abbr: 'm',
      required: true
    },

    'arch': {
      abbr: 'a',
      help: 'Specify the target architecture: x86 or x64 (optional)'
    },

    'upgradeCode': {
      abbr: 'u',
      full: 'upgrade-code',
      help: 'Specify GUID to use for upgrading from other versions',
      required: true
    },

    'iconPath': {
      abbr: 'i',
      full: 'icon',
      help: 'Specify an icon to use on shortcuts and installer',
      required: true
    },

    'executable': {
      abbr: 'e',
      help: 'Specify file to create shortcuts for',
      required: true
    },

    'runAfter': {
      abbr: 'r',
      flag: true,
      full: 'run-after',
      help: 'Run the application after installation completes',
    },

    'shortcut': {
      abbr: 's',
      flag: true,
      full: 'shortcut',
      help: 'Add shortcut to desktop and menu',
    },

    'startup': {
      abbr: 'x',
      flag: true,
      full: 'startup',
      help: 'Register the application to run on startup',
    },
    'parameters': {
      abbr: 'p',
      help: 'Run executable with parameters',
    },

    'localInstall': {
      flag: true,
      full: 'local',
      abbr: 'l',
      help: 'Install per user (no administrator rights required)'
    }
  }).parse();

packageMsi(opts, function (err) {
  if (err) throw err
  console.log('Outputed to ' + path.resolve(opts.output))
})
