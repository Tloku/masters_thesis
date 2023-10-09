#!/bin/bash

# Define the order in which SQL scripts should be executed
SCRIPTS=(
  "V1__CreateTables.sql"
  "V2__BodyType.sql"
  "V3__VehicleType.sql"
  "V4__TransmissionType.sql"
  "V5__FuelType.sql"
  "V6__DriveType.sql"
  "V7__CarStatus.sql"
  "V8__EquipmentType.sql"
  "V9__Equipment.sql"
  "V10__Dealer.sql"
  "V11__Vehicle.sql"
  "V12__Offer.sql"
  "V13__VehicleImages.sql"
  "V14__VehicleEquipment.sql"
)

# Set PostgreSQL connection parameters
POSTGRES_HOST="postgres"
POSTGRES_PORT="8090"
POSTGRES_USER="dominik"
POSTGRES_PASSWORD="12345"
POSTGRES_DB="oto_auto"

# Loop through and execute the SQL scripts
for SCRIPT in "${SCRIPTS[@]}"; do
  echo "Running script: $SCRIPT"
  psql -h $POSTGRES_HOST -p $POSTGRES_PORT -U $POSTGRES_USER -d $POSTGRES_DB -a -f ./SQL_Scripts/$SCRIPT
done

echo "All scripts executed successfully"

# Keep the container running
tail -f /dev/null