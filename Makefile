include website/Makefile
include infrastructure/Makefile

# Make will use bash instead of sh
SHELL := /usr/bin/env bash

.PHONY: help
help: ## Helper
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

.DEFAULT_GOAL := help
VIRTUAL_ENV := true

setup-project: ## Setup the project
	@chmod +x ./scripts/setup.sh && ./scripts/setup.sh $(VIRTUAL_ENV)

setup: setup-project setup-website setup-infrastructure ## Setup local env

lint: ## Lint code with pre-commit
	@source .activate && pre-commit run --all-files

deploy: ## Deploy build to S3
	@chmod +x ./scripts/deploy.sh && ./scripts/deploy.sh

tests: lint pages-check build plan ## Run tests
	@echo "Running tests"
