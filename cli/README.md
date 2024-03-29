oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli
$ cli COMMAND
running command...
$ cli (--version)
cli/0.0.0 darwin-arm64 node-v18.19.0
$ cli --help [COMMAND]
USAGE
  $ cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cli hello PERSON`](#cli-hello-person)
* [`cli hello world`](#cli-hello-world)
* [`cli help [COMMANDS]`](#cli-help-commands)
* [`cli plugins`](#cli-plugins)
* [`cli plugins:install PLUGIN...`](#cli-pluginsinstall-plugin)
* [`cli plugins:inspect PLUGIN...`](#cli-pluginsinspect-plugin)
* [`cli plugins:install PLUGIN...`](#cli-pluginsinstall-plugin-1)
* [`cli plugins:link PLUGIN`](#cli-pluginslink-plugin)
* [`cli plugins:uninstall PLUGIN...`](#cli-pluginsuninstall-plugin)
* [`cli plugins reset`](#cli-plugins-reset)
* [`cli plugins:uninstall PLUGIN...`](#cli-pluginsuninstall-plugin-1)
* [`cli plugins:uninstall PLUGIN...`](#cli-pluginsuninstall-plugin-2)
* [`cli plugins update`](#cli-plugins-update)

## `cli hello PERSON`

Say hello

```
USAGE
  $ cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/package-based/cli/blob/v0.0.0/src/commands/hello/index.ts)_

## `cli hello world`

Say hello world

```
USAGE
  $ cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/package-based/cli/blob/v0.0.0/src/commands/hello/world.ts)_

## `cli help [COMMANDS]`

Display help for cli.

```
USAGE
  $ cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.12/src/commands/help.ts)_

## `cli plugins`

List installed plugins.

```
USAGE
  $ cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.21/src/commands/plugins/index.ts)_

## `cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cli plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cli plugins add

EXAMPLES
  $ cli plugins add myplugin 

  $ cli plugins add https://github.com/someuser/someplugin

  $ cli plugins add someuser/someplugin
```

## `cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.21/src/commands/plugins/inspect.ts)_

## `cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cli plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cli plugins add

EXAMPLES
  $ cli plugins install myplugin 

  $ cli plugins install https://github.com/someuser/someplugin

  $ cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.21/src/commands/plugins/install.ts)_

## `cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ cli plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.21/src/commands/plugins/link.ts)_

## `cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cli plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cli plugins unlink
  $ cli plugins remove

EXAMPLES
  $ cli plugins remove myplugin
```

## `cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ cli plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.21/src/commands/plugins/reset.ts)_

## `cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cli plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cli plugins unlink
  $ cli plugins remove

EXAMPLES
  $ cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.21/src/commands/plugins/uninstall.ts)_

## `cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cli plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cli plugins unlink
  $ cli plugins remove

EXAMPLES
  $ cli plugins unlink myplugin
```

## `cli plugins update`

Update installed plugins.

```
USAGE
  $ cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.21/src/commands/plugins/update.ts)_
<!-- commandsstop -->
