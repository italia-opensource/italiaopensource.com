BASEDIR_INFRASTRUCTURE=/infrastructure
ifeq (,$(findstring $(BASEDIR_INFRASTRUCTURE),$(PWD)))
_WORKDIR_INFRASTRUCTURE:=$${PWD}$(BASEDIR_INFRASTRUCTURE)
else
_WORKDIR_INFRASTRUCTURE:=$${PWD}
endif

setup-infrastructure: ## Execute terraform init
	@cd $(_WORKDIR_INFRASTRUCTURE)/scripts && chmod +x setup.sh && ./setup.sh $${WORKSPACE} && cd -

select-workspace: ## Select terraform workspace
	@cd $(_WORKDIR_INFRASTRUCTURE) && terraform workspace select $${WORKSPACE}

.PHONY: plan
plan: select-workspace ## Execute terraform plan
	@cd $(_WORKDIR_INFRASTRUCTURE) && \
	terraform plan -var-file=env/$${WORKSPACE}.tfvars -var-file=env/secrets.tfvars

.PHONY: apply
apply: select-workspace ## Execute terraform plan
	@cd $(_WORKDIR_INFRASTRUCTURE) && \
	terraform apply -var-file=env/$${WORKSPACE}.tfvars -var-file=env/secrets.tfvars

.PHONY: destroy
destroy: select-workspace ## Execute terraform plan
	@cd $(_WORKDIR_INFRASTRUCTURE) && \
	terraform destroy -var-file=env/$${WORKSPACE}.tfvars -var-file=env/secrets.tfvars

apply-auto-approve: select-workspace ## Execute terraform plan
	@cd $(_WORKDIR_INFRASTRUCTURE) && \
	terraform apply -var-file=env/$${WORKSPACE}.tfvars -var-file=env/secrets.tfvars -auto-approve

check-drift: ## Check for drift. This will change the meaning of exit codes to: 0 - Succeeded (no changes), 1 - Errored, 2 - Succeeded, there is a diff
	@cd $(_WORKDIR_INFRASTRUCTURE) && \
	terraform plan -var-file=env/$${WORKSPACE}.tfvars -var-file=env/secrets.tfvars -detailed-exitcode -lock=false
