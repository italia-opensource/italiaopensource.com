# Italia Open-Source website

### Requirements

|pkg|version|install|
|---|---|---|
|devbox|`>=0.12.0`|[docs](https://www.jetify.com/devbox/docs/installing_devbox/#install-devbox)|

### Devmode

**Develop website in local:**

```bash
devbox shell

devbox run website start
```

If you want start website with italian lang run: `devbox run website start LOCALE=it`.

If you want start website with multi-lang run: `devbox run website build && devbox run website serve`

**[Doppler] Develop infrastructure in local:**

```bash
devbox shell

doppler login

# WARN: Before run `infra` cmd export your AWS Credentials or AWS Profile into .env

devbox run switch-env <staging|production>

devbox run infra setup

devbox run infra plan

devbox run deploy
```

To switch env run: `devbox run switch-env <staging|production>`

**[Without Doppler] Develop infrastructure in local:**

```bash
echo 'export WORKSPACE=staging|production' >> .env
echo 'export AWS_ACCOUNT_ID=...' >> .env
echo 'export AWS_DEFAULT_REGION=...' >> .env
echo 'export AWS_TERRAFORM_STATE_BUCKET=...' >> .env # (optional) If not set by default use local backend

# WARN: Before run `infra` cmd export your AWS Credentials or AWS Profile into .env

devbox shell

devbox run infra setup

devbox run infra plan

devbox run deploy
```
