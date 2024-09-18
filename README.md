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

If you want start website with multi-lang run: `devbox run website build serve`

**Develop infrastructure in local:**

With doppler access:

```bash
devbox shell

doppler login

devbox run doppler

# WARN: Before run `infra` cmd export AWS Credentials or Profile

devbox run infra setup

devbox run infra plan
```

Or set your env vars without doppler:

```bash
echo 'export AWS_ACCOUNT_ID=...' >> .env
echo 'export AWS_DEFAULT_REGION=...' >> .env
echo 'export AWS_TERRAFORM_STATE_BUCKET=...' >> .env # (optional) If not set, use local backend by default

# WARN: Before run `infra` cmd export AWS Credentials or Profile

devbox shell

devbox run infra setup

devbox run infra plan
```
