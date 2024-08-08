# Italia Open-Source website

### Requirements

|pkg|version|used in |
|---|---|---|
|node | v21.7.1| website/ |
|yarn | 1.22.22| website/ |
|python | >= 3.10 | website/ |
|terraform | >= 1.7 | infrastructure/ |
|tflint | >= 0.51.0 | infrastructure/ |

### Devmode

**Develop website in local:**

```bash
make setup-project setup-website

source .activate

make start
```

If you want start website with italian lang run: `make start LOCALE=it`.

If you want start website with multi-lang run: `make build && make serve`

**Develop infrastructure in local:**

With doppler access:

```bash
doppler login

make doppler

echo 'export AWS_ACCESS_KEY_ID=...' >> .aws.env
echo 'export AWS_SECRET_ACCESS_KEY=...' >> .aws.env

source .env

make setup-infrastructure

make plan
```

Or set your env vars without doppler:

```bash
echo 'export WORKSPACE=...' > .env
echo 'export AWS_ACCOUNT_ID=...' >> .env
echo 'export AWS_DEFAULT_REGION=...' >> .env
echo 'export AWS_TERRAFORM_STATE_BUCKET=...' >> .env # (optional) If not set, use local backend by default

echo 'export AWS_ACCESS_KEY_ID=...' >> .env
echo 'export AWS_SECRET_ACCESS_KEY=...' >> .env

source .env

make setup-infrastructure

make plan
```
