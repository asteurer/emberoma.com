# The AWS data center closest to Texas
domain := emberoma.com
aws_region := us-east-2
op_vault := $(domain)_PROD

tf-apply:
	@./infra/apply.sh $(domain) $(op_vault) $(aws_region)

tf-destroy:
	@./infra/destroy.sh $(domain) $(op_vault) $(aws_region)

build:
	@docker build . -t dev

run:
	@docker run --name dev -p 3000:3000 dev tail -f /dev/null

stop:
	@docker stop $$(docker ps -q)
	@docker rm dev

copy-to:
	@docker cp ~/Repositories/Personal/emberoma.com/website/. dev:/html/

copy-from:
	@docker cp dev:/html/. ~/Repositories/Personal/emberoma.com/website/

update:
	@./infra/update_s3.sh $(domain) $(op_vault)

