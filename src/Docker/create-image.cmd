docker build --no-cache -f SQL\Dockerfile.PostgreSql -t crm/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t crm/app ../..
