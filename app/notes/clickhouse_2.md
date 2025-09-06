# ClickHouse Architecture

## Data Storage in ClickHouse

- How data is being stored in ClickHouse by the MergeTree Table Engine
- ClickHouse has different ways to store and retreive data
- An _engine_ must be specified for each table in ClickHouse
- A **_table engine_** determines how and where the data is stored

## MergeTree Engine

### What a Primary Key (PK) is in a MergeTree table

- **_How the data gets sorted on disk_**
- PKs are not unique to each row
