# The AWS data center closest to Texas
domain := emberoma.com
aws_region := us-east-2
op_vault := $(domain)_PROD

tf-apply:
	@./infra/apply.sh $(domain) $(op_vault) $(aws_region)

tf-destroy:
	@./infra/destroy.sh $(domain) $(op_vault) $(aws_region)

build:
	@docker build . -t emberoma

run:
	@docker run --name emberoma -p 3000:3000 emberoma tail -f /dev/null

stop:
	@docker stop $$(docker ps -q)
	@docker rm emberoma

copy-to:
	@docker exec emberoma sh -c "rm -rf /html/*"
	@docker cp ./website/. emberoma:/html/
	@docker exec emberoma sh -c \
		"cd /html && rm -rf node_modules && npm install && npm run build && npm run start"

copy-from:
	@docker cp emberoma:/html/. ./website/

update:
	@./infra/update_s3.sh $(domain) $(op_vault)

