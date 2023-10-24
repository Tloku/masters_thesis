#!/bin/bash

psql -U dominik -d oto_auto -c "CREATE USER replica_user REPLICATION LOGIN ENCRYPTED PASSWORD '12345';"
