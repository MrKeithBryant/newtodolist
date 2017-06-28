
  CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  details VARCHAR(100),
  priority INTEGER NOT NULL,
  created_at timestamp NOT NULL,
  completed_at timestamp);

  INSERT INTO todos (title, details, priority, created_at, completed_at)
  VALUES ('dishes', 'wash and dry', '7', current_timestamp, current_timestamp);
  INSERT INTO todos (title, details, priority, created_at)
  VALUES ('dog walk', 'around the block', '7', current_timestamp),
  ('pick up groceries', 'apples, milk, butter', '4', current_timestamp),
  ('wash the car', 'Meguires', '1', current_timestamp),
  ('go for a run', '2 miles', '3', current_timestamp);

  SELECT * FROM todos;
  SELECT title FROM todos WHERE completed_at IS NULL;
  SELECT title FROM todos WHERE priority > 1;
  UPDATE todos SET completed_at = current_timestamp WHERE id = 2;
  DELETE FROM todos WHERE completed_at IS NOT NULL;
