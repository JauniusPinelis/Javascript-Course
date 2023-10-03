# Use the official PostgreSQL image as the base image
FROM postgres:latest

# Create a directory inside the container to store PostgreSQL data
RUN mkdir -p /var/lib/postgresql/data

# Set the ownership and permissions of the data directory to the PostgreSQL user
RUN chown -R postgres:postgres /var/lib/postgresql/data

# Expose the PostgreSQL port (default is 5432)
EXPOSE 5432

# Define an environment variable to set the data directory
ENV PGDATA=/var/lib/postgresql/data
ENV POSTGRES_DB=auth
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres

# Define a volume to store PostgreSQL data outside the container
VOLUME ["/var/lib/postgresql/data"]

# Optionally, you can provide a custom configuration file if needed
# COPY postgresql.conf /etc/postgresql/postgresql.conf

# Start the PostgreSQL server
CMD ["postgres"]