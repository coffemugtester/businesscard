# Build stage
FROM golang:1.24-alpine AS builder

WORKDIR /app

# Copy go mod file
COPY go.mod ./

# Download dependencies (if any)
RUN go mod download

# Copy source code
COPY *.go ./

# Build the application
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

# Production stage
FROM gcr.io/distroless/static-debian12:nonroot

WORKDIR /app

# Copy the binary from builder
COPY --from=builder /app/main .

# Copy static files and templates
COPY static/ ./static/
COPY templates/ ./templates/

# Expose port 8080
EXPOSE 8080

# Run the application
CMD ["./main"]
