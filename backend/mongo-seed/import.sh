#! /bin/bash

mongoimport --host mongodb --db blog --collection article --type json --file /mongo-seed/data.json --jsonArray