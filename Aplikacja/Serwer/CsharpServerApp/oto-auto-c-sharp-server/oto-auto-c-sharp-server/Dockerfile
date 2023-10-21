FROM mcr.microsoft.com/dotnet/sdk:7.0-jammy AS build-stage

WORKDIR /source

COPY oto-auto-c-sharp-server.csproj .
RUN dotnet restore

COPY . .
RUN dotnet publish -c Release -o /app --self-contained false

FROM mcr.microsoft.com/dotnet/nightly/sdk:7.0-jammy
WORKDIR /app

COPY --from=build-stage /app .
EXPOSE 5000
ENTRYPOINT [ "dotnet", "oto-auto-c-sharp-server.dll"]