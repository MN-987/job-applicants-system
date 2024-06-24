# Job Applicants System

The Job Applicants System is a scalable web application designed for managing information about job candidates. It consists of a back-end service with API endpoints and a front-end application that integrates seamlessly with the back-end via these APIs. <br><br>Leveraging an event-driven architecture with RabbitMQ, the system is built to handle large volumes of candidate data, designed to eventually support tens of thousands of records.<br><br> The project follows a layered architecture approach, emphasizing modularity, maintainability, and scalability to meet both current and future needs in candidate management.

## Prerequisites

Before setting up and running the Job Applicants System, ensure you have the following installed and configured:
- Node.js and npm (for running the front-end application)
-  RabbitMQ (for event-driven communication)
-  Database (e.g., PostgreSQL, MySQL) and connection url provided 
-  Docker 

 # Installation
If you don't have RabbitMQ installed, you can use the public Docker image by running this command 
```bash 
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management

```
Then in your backend env file you will replace the RABBITMQ_URL with :
```bash
amqp://guest:guest@localhost:5672
```
Follow these steps to install and run the Job Applicants System:

1.  **Clone the repository:**
```bash
   git clone https://github.com/MN-987/job-applicants-system.git
```
2.  Install dependencies in front end and backend by running npm install in each folder :
   ``` bash
  npm install
```
3. **Running the Backend and Frontend:**

   - **Backend:**
     - Navigate to the `backend` directory.
     - Then run this command
      ```  npm start ```
     - Copy the URL of the backend service.

   - **Frontend:**
     - Navigate to the `frontend` directory.
     - Then run this command
      ```  npm run dev ```
     - Copy the URL of the frontend application.

   - **Environment Variables:**
     - Create a `.env` file in both the `backend` and `frontend` directories (if not already present).
     - Use the `.envexample` file as a template.
     - Paste the respective URLs into the `.env` files for `FRONTEND_URL` (frontend) and `VITE_REACT_APP_backend_URL` (backend).
       

4. **Migrate Database**

   Note: Here, I used Prisma Client with PostgreSQL. You can configure Prisma or any other ORM of your choice.
   </br>
   It is Importand then to Implement the interface present in the reposotiry layer

   ```bash
   npx prisma migrate dev --name init
   ```

# Usage

Send a POST request using the frontend or Postman to `/api/v1/apply` with the following JSON object in the request body:

```json
{
    "type": "candidate_application",
    "data": {
        "firstName": "ali",
        "lastName": "Doe",
        "phoneNumber": "123-456-7890",
        "email": "john.doe@example.com",
        "bestCallTime": "9am-11am",
        "linkedInUrl": "https://www.linkedin.com/in/johndoe",
        "githubUrl": "https://github.com/johndoe",
        "comment": "Experienced full-stack developer with expertise in Node.js and React."
    }
}
```
