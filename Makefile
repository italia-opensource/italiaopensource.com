# Make will use bash instead of sh
SHELL := /usr/bin/env bash

.PHONY: help
help: ## Helper
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

.DEFAULT_GOAL := help
VIRTUAL_ENV := true

include website/Makefile
include infrastructure/Makefile

.PHONY: setup-project
setup-project: ## Setup the project
	@chmod +x ./scripts/deps.sh && ./scripts/deps.sh $(VIRTUAL_ENV)

.PHONY: setup
setup: setup-project setup-website setup-infrastructure ## Setup local env

.PHONY: doppler
doppler: ## Install deps
	@chmod +x ./scripts/doppler.sh && ./scripts/doppler.sh

.PHONY: lint
lint: ## Lint code with pre-commit
	@source .activate && pre-commit run --all-files

.PHONY: deploy
deploy: ## Deploy build to S3
	@chmod +x ./scripts/deploy.sh && ./scripts/deploy.sh

.PHONY: tests
tests: lint pages-check build plan ## Run tests
	@echo "Running tests"
