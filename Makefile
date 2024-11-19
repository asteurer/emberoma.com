domain := emberoma.com
aws_region := us-east-2 # The AWS data center closest to Texas
op_vault := $(domain)_PROD

tf-apply:
	@./infra/apply.sh $(domain) $(op_vault) $(aws_region)

tf-destroy:
	@./infra/destroy.sh $(domain) $(op_vault) $(aws_region)

build:
	@docker build . -t emberoma

# Run the docker container without stopping it
run:
	@docker run --name emberoma -p 3000:3000 emberoma tail -f /dev/null

# Stop all running containers and remove the container
stop:
	@docker stop $$(docker ps -q)
	@docker rm emberoma

# Copy work that was done locally to the running docker container and reset the npm install
copy-to:
	@docker exec emberoma sh -c "rm -rf /html/*"
	@docker cp ./website/. emberoma:/html/
	@docker exec emberoma sh -c \
		"cd /html && rm -rf node_modules && npm install && npm run build && npm run start"

# Copy the built files locally
copy-from:
	@docker cp emberoma:/html/. ./website/

# Update S3 with the site files
update:
	@./infra/update_s3.sh $(domain) $(op_vault)

