# Use NodeJS with Alpine Linux as runtime
FROM node:20 AS runtime

# Set the work directory
WORKDIR /penpot-desktop

# Copy repo to the work directory
COPY . /penpot-desktop

RUN apt update
RUN apt install git rpm -y

# Enable yarn (Yarn is preferred)
CMD sh buildit.sh