BASEDIR_WEBSITE=/website

ifeq (,$(findstring $(BASEDIR_WEBSITE),$(PWD)))
_WORKDIR_WEBSITE:=$${PWD}$(BASEDIR_WEBSITE)
else
_WORKDIR_WEBSITE:=$${PWD}
endif

VIRTUAL_ENV := true

.PHONY: start
start: ## Start the development server
	@export ENV=develop
	@cd $(_WORKDIR_WEBSITE) && yarn start

.PHONY: build
build: ## Build website project
	@cd $(_WORKDIR_WEBSITE) && ls && yarn build

.PHONY: serve
serve: ## Serve website project
	@cd $(_WORKDIR_WEBSITE) && yarn serve

create-pages: ## Create website pages
	@cd $(_WORKDIR_WEBSITE) && yarn create-pages

create-landings: ## Create website landings
	@cd $(_WORKDIR_WEBSITE) && yarn create-landings

pages-check:
	@cd $(_WORKDIR_WEBSITE) && yarn mdx-checker

setup-website: ## Setup the project
	@cd $(_WORKDIR_WEBSITE)/scripts && chmod +x setup.sh && ./setup.sh $(VIRTUAL_ENV) && cd -

.PHONY: download
download:
	@cd $(_WORKDIR_WEBSITE) && chmod +x scripts/download.sh && ./scripts/download.sh && cd -