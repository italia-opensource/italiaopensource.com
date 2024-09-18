HASH_COMMIT := latest
LOCALE := en

.PHONY: start
start: ## Start the development server
	yarn start --locale=$(LOCALE)

.PHONY: build
build: ## Build website project
	ls && yarn build

.PHONY: serve
serve: ## Serve website project
	yarn serve

create-pages: ## Create website pages
	yarn create-pages

create-landings: ## Create website landings
	yarn create-landings

pages-check:
	yarn mdx-checker

setup: ## Setup the project
	chmod +x scripts/setup.sh && ./scripts/setup.sh && cd -

.PHONY: download
download: ## Download database from awesome-italia-opensource
	chmod +x scripts/download.sh && ./scripts/download.sh $(HASH_COMMIT) && cd -