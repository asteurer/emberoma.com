#!/bin/bash

domain=$1
op_vault=$2
aws_region=$3
script_dir=infra # The directory in which the Terraform files live

cf_data=$(op item get cloudflare_$domain --vault $op_vault --fields label=credential,label=zone_id --format json --reveal)
cf_token=$(printf '%s\n' "$cf_data" | jq -r '.[] | select(.label == "credential") | .value')
cf_zone=$(printf '%s\n' "$cf_data"  | jq -r '.[] | select(.label == "zone_id") | .value')

aws_data=$(op item get aws_asteurer_$domain --vault $domain"_PROD" --fields label=access_key,label=secret_access_key --format json --reveal)
export AWS_ACCESS_KEY=$(printf '%s\n' "$aws_data" | jq -r '.[] | select(.label == "access_key") | .value')
export AWS_SECRET_KEY=$(printf '%s\n' "$aws_data" | jq -r '.[] | select(.label == "secret_access_key") | .value')

echo -e "\n##################################################################"

correct_response=Yeahyuh

# If the user confirms, proceed with apply; otherwise, exit 1
read \
    -p "Are you you sure you want to destroy this infrastructure? If so, type \"$correct_response\": " \
    user_response && [[ $user_response == $correct_response ]] || exit 1

echo -e "Proceeding with terraform destroy..."

terraform -chdir=$script_dir destroy \
    --auto-approve \
    --var="aws_region=$aws_region" \
    --var="ssh_public_key=$ssh_key" \
    --var="domain=$domain" \
    --var "cloudflare_zone_id=$cf_zone" \
    --var "cloudflare_api_token=$cf_token"