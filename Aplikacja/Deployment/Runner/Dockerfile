FROM ubuntu:22.04

WORKDIR /opt

RUN apt-get update -y && \
    apt-get upgrade

# install curl
RUN apt-get install curl -y

# install maven
RUN apt install maven -y

# install java 17
RUN apt install -y openjdk-17-jdk && \
    apt install -y openjdk-17-jre

# install node 16.16
RUN curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
RUN chmod +x nodesource_setup.sh
RUN ./nodesource_setup.sh
RUN apt-get install -y nodejs

# install dotnet
RUN apt-get install -y dotnet-sdk-7.0 && \
    apt-get install -y aspnetcore-runtime-7.0

# install helm
RUN curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | tee /usr/share/keyrings/helm.gpg > /dev/null && \
    apt-get install apt-transport-https --yes && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | tee /etc/apt/sources.list.d/helm-stable-debian.list && \
    apt-get update && \
    apt-get install helm

# install docker
RUN apt install docker.io -y


