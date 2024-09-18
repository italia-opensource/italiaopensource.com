setup: ## Execute terraform init
	chmod +x scripts/*.sh && ./scripts/setup.sh $${WORKSPACE} && cd -

select-workspace: ## Select terraform workspace
	terraform workspace select $${WORKSPACE}

.PHONY: plan
plan: select-workspace ## Execute terraform plan
	terraform plan -var-file=env/$${WORKSPACE}.tfvars -var-file=env/secrets.tfvars

.PHONY: apply
apply: select-workspace ## Execute terraform plan
	terraform apply -var-file=env/$${WORKSPACE}.tfvars -var-file=env/secrets.tfvars

.PHONY: destroy
destroy: select-workspace ## Execute terraform plan
	terraform destroy -var-file=env/$${WORKSPACE}.tfvars -var-file=env/secrets.tfvars

apply-auto-approve: select-workspace ## Execute terraform plan
	terraform apply -var-file=env/$${WORKSPACE}.tfvars -var-file=env/secrets.tfvars -auto-approve

check-drift: ## Check for drift. This will change the meaning of exit codes to: 0 - Succeeded (no changes), 1 - Errored, 2 - Succeeded, there is a diff
	terraform plan -var-file=env/$${WORKSPACE}.tfvars -var-file=env/secrets.tfvars -detailed-exitcode -lock=false
