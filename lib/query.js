const queries = {
    viewEmployees: `SELECT e.id, e.first_name, e.last_name, IFNULL(emp.last_name,'no manager') as manager, r.title, r.salary
    FROM employees e          
    JOIN roles r     
    ON r.id = e.role_id
    LEFT JOIN employees emp
    ON emp.id = e.manager_id;`,
    viewDepartments: `SELECT * FROM departments`
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
}

module.exports = Query;