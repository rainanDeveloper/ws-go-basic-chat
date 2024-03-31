FROM golang:1.22.1-alpine

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY *.go ./

RUN make build

EXPOSE 8080


