# Italia Open-Source website

### Requirements

|pkg|version|used in |
|---|---|---|
|node | v21.7.1| italiaopensource.com/ |
|yarn | 1.22.22| italiaopensource.com/ |
|python | >= 3.9 | italiaopensource.com/ |
|terraform | >= 1.7 | infrastructure/ |
|tflint | >= 0.51.0 | infrastructure/ |

### Devmode

```bash
echo 'export WORKSPACE=...' > .env
echo 'export AWS_ACCESS_KEY_ID=...' >> .env
echo 'export AWS_SECRET_ACCESS_KEY=...' >> .env
echo 'export AWS_ACCOUNT_ID=...' >> .env
echo 'export AWS_DEFAULT_REGION=...' >> .env
echo 'export AWS_TERRAFORM_STATE_BUCKET=...' >> .env # (optional) If not set, use local backend by default
echo 'export CALL_GH_API=...' >> .env # (optional)

source .env

make setup

source .activate
````
