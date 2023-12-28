#!/bin/bash

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
  "V14__Vehicle_Equipment.sql"
)

POSTGRES_USER="dominik"
POSTGRES_DB="oto_auto"

for SCRIPT in "${SCRIPTS[@]}"; do
  echo "Running script: $SCRIPT"
  psql -U $POSTGRES_USER -d $POSTGRES_DB -a -f ./SQL_Scripts/$SCRIPT
done

echo "All scripts executed successfully"

tail -f /dev/null