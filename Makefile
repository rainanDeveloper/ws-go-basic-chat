.PHONY: default run build test

APP_NAME=ws-chat
DIST_FOLDER=dist

default: run-with-docs

run:
	@go run src/main.go

run-with-docs:
	@go run src/main.go

build:
	@go build -o ${DIST_FOLDER}/${APP_NAME} src/main.go

clean:
	@rm -rf ${DIST_FOLDER}