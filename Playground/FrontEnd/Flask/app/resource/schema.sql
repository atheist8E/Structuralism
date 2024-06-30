drop table if exists ANALYSIS_HISTORY;

create table ANALYSIS_HISTORY (
  id integer primary key autoincrement,
  line_id text not null,
  process_id text not null,
  current_step text not null,
  start_step text not null,
  duration_start text not null,
  duration_end text not null,
  cpo text not null,
  area text not null,
  distance text not null,
  mark_type text not null,
  db_insert_time text not null
);