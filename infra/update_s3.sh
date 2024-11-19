#!/bin/bash

domain=$1
op_vault=$2

aws_data=$(op item get aws_asteurer_$domain --vault $op_vault --fields label=access_key,label=secret_access_key --format json --reveal)
export AWS_ACCESS_KEY_ID=$(printf '%s\n' "$aws_data" | jq -r '.[] | select(.label == "access_key") | .value')
export AWS_SECRET_ACCESS_KEY=$(printf '%s\n' "$aws_data" | jq -r '.[] | select(.label == "secret_access_key") | .value')

aws s3 sync website/public s3://emberoma.com/