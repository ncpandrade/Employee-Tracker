const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');
//create create question array

const Query = require("./lib/query")

const query = new Query(db);

const questions = {
    main: [
        {
            type: "list",
            message: "What would you like to do?",
            name: "action",
            choices: ["view departments", "view employees", "view roles", "add a department", "add a role", "add an employee", "update and employee", "Exit"]
        }
    ]
}

function main() {
    inquirer.prompt(questions.main)
        .then(({ action }) => {
            switch (action) {
                case "view departments":
                    query.viewDepartments(main)
                    break;
                case "view employees":
                    query.viewEmployees(main)
                    break;
                case "view roles":
                    query.viewRoles(main);
                    break;
                case "add a department":
                    query.addDepartment(main);
                    break;
                case "add a role":
                    query.addRole(main);
                    break;
                case "add an employee":
                    query.addEmployee(main);
                    break;
                default:
                    process.exit(0);
            }
        });

}

// function viewDepartments() {
//     const sql = `SELECT * FROM departments`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }
//         console.table(rows);
//         main();
//     });
// }

// function viewEmployees() {
//     const sql = `SELECT e.id, e.first_name, e.last_name, IFNULL(emp.last_name,'no manager') as manager, r.title, r.salary
//                 FROM employees e          
//                 JOIN roles r     
//                 ON r.id = e.role_id
//                 LEFT JOIN employees emp
//                 ON emp.id = e.manager_id;`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }
//         console.table(rows);
//         main();
//     });
// }

// function viewRoles() {
//     const sql = `SELECT * FROM departments`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }
//         console.table(rows);
//         main();
//     });
// }
main();