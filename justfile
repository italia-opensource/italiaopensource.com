# [harness-coding:START] managed by harness-coding template, do not edit manually
# Add project commands to justfile.project, personal ones to justfile.local.
import? 'justfile.project'
import? 'justfile.local'
import? 'justfile.tooling'
import? 'justfile.private'

default:
  @just --list

[group('setup')]
setup:
  @echo "[INFO] Setup"
  @.devcontainer/scripts/setup-devcontainer.sh
# [harness-coding:END]
