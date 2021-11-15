INSERT INTO departments (department_name)
VALUES
  ('Sales'),
  ('Marketing'),
  ('IT');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Marketing Analyst', 80000.00, 2),
  ('Associate', 50000, 1),
  ('Engineer', 650000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Nadine', "Paez", 1, NULL),
  ('Henry', "Smith", 2, 1),
  ('Alex', "Miller", 3, 1);