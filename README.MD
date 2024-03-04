# Scholarship Application

This project is a simple CRUD (Create, Read, Update, Delete) application for managing student essays, recommendation letters, and student information.

## SCHEMAS

The application defines three main schemas using Mongoose:

### Essays Schema

The essays schema includes the following fields:

- **topic**: predetermined essay subjects
- **group**: club that will award the scholarship
- **award**: dollar amount of scholarship awarded

### Letters Schema

The letters schema includes the following fields:

- **letter**: letter of recomendation submitted or not
- **recName**: the name of the recommender
- **gpa**: tudents GPA (Grade Point Average)

### Students Schema

The students schema includes the following fields:

- **id**: student ID
- **studentName**: student name
- **email**: student email
- **contact**:student contact

## DATA FILES

- **essays.js**: Contains an array of essay objects representing essays submitted by students.

  - Each essay object includes properties such as topic, group, and award.

- **letters.js**: Contains an array of recommendation letter objects provided by recommenders.

  - Each letter object includes properties such as letter, recName, and GPA.

- **students.js**: Contains an array of student objects representing student information.
  - Each student object includes properties such as id, studentName, email, and contact.

## ENDPOINTS

- **Essays:**

  - GET /essays: Get all essays
  - POST /essays: Create a new essay
  - PUT /essays/:id: Update an existing essay
  - DELETE /essays/:id: Delete an essay by ID

- **Letters:**

  - GET /letters: Get all recommendation letters
  - POST /letters: Create a new recommendation letter
  - PUT /letters/:id: Update an existing recommendation letter
  - DELETE /letters/:id: Delete a recommendation letter by ID

- **Students:**
  - GET /students: Get all students
  - POST /students: Create a new student
  - PUT /students/:id: Update an existing student
  - DELETE /students/:id: Delete a student by ID

## TECHNOLOGIES USED

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Visual Studio Code
