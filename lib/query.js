const inquirer = require("inquirer");

const queries = {
    viewEmployees: `SELECT e.id, e.first_name, e.last_name, IFNULL(emp.last_name,'no manager') as manager, r.title, r.salary
    FROM employees e          
    JOIN roles r     
    ON r.id = e.role_id
    LEFT JOIN employees emp
    ON emp.id = e.manager_id;`,
    viewDepartments: `SELECT * FROM departments`,
    viewRoles: `SELECT * FROM departments`,
    addDepartment: `INSERT INTO departments (department_name) VALUES (?);`,
    addEmployee: `INSERT INTO roles (first_name, last_name, role_id) VALUES (?, ?, ?);`
}

class Query {
    constructor(db) {
        this.db = db;
    }
    viewDepartments = function (main) {
        this.db.query(queries.viewDepartments, (err, rows) => {
            if (err) {
                console.log(err.message);
                return;
            }
            console.table(rows);
            main();
        });
    }

    //VIEW ROLES
    viewEmployees = function (main) {
        this.db.query(queries.viewEmployees, (err, rows) => {
            if (err) {
                console.log(err.message);
                return;
            }
            console.table(rows);
            main();
        });
    }

    // VIEW ROLES
    viewRoles = function (main) {
        this.db.query(queries.viewRoles, (err, rows) => {
            if (err) {
                console.log(err.message);
                return;
            }
            console.table(rows);
            main();
        });
    }

    // ADD DEPARTMENT
    addDepartment = function getDepartmentInfo(main) {
        inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the department name?"
        },
        ])
            .then(({ name }) => {
                console.log(name);

                this.db.query(queries.addDepartment, [name], (err, rows) => {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                    console.table(rows);
                    main();
                });
            })
    }

    //ADD ROLE
    addRole = function getRoleInfo(main) {
        inquirer.prompt([{
            type: "input",
            name: "title",
            message: "What is the title of the role?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary for this role?"
        },
        {
            type: "input",
            name: "department_id",
            message: "What is the department id for this role?"
        },
        ])
            .then(({ title, salary, department_id }) => {
                console.log(title, salary, department_id);

                this.db.query(queries.addDepartment, [title, salary, department_id], (err, rows) => {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                    console.table(rows);
                    main();
                });
            });
    }//END ADD ROLE

// ADD EMPLOYEE
    addEmployee = function getEmployeeInfo(main) {
        inquirer.prompt([{
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the employee's role id?"
        },
        ])
            .then(({ first_name, last_name, role_id }) => {

                this.db.query(queries.addEmployee, [first_name, last_name, role_id], (err, rows) => {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                    console.table(rows);
                    main();
                });
            })
    }//END ADD EMPLOYEE
}//END QUERY


module.exports = Query;