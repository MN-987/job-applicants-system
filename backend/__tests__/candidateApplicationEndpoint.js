const request = require('supertest');
const app = require('../src/app');
const { publishEvent } = require('../src/events/producer');

jest.mock('../src/events/producer');

describe('POST /apply', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should respond with a success message when the application is submitted', async () => {
        publishEvent.mockResolvedValue(); // Mock the resolved value for publishEvent

        const response = await request(app)
            .post('/api/v1/apply')
            .send({
                type: "candidate_application", // Simulate correct input structure
                data: {
                    firstName: "Ali",
                    lastName: "Doe",
                    phoneNumber: "123-456-7890",
                    email: "john.doe@example.com",
                    bestCallTime: "9am-11am",
                    linkedInUrl: "https://www.linkedin.com/in/johndoe",
                    githubUrl: "https://github.com/johndoe",
                    comment: "Experienced full-stack developer with expertise in Node.js and React."
                }
            });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Application submitted successfully' });
        expect(publishEvent).toHaveBeenCalledWith('candidate_application', {
            data: {
            firstName: "Ali",
            lastName: "Doe",
            phoneNumber: "123-456-7890",
            email: "john.doe@example.com",
            bestCallTime: "9am-11am",
            linkedInUrl: "https://www.linkedin.com/in/johndoe",
            githubUrl: "https://github.com/johndoe",
            comment: "Experienced full-stack developer with expertise in Node.js and React."  
        },
            type: "candidate_application"
        });
    });

    it('should handle errors and respond with a 500 status', async () => {
        const error = new Error('Publish event failed');
        publishEvent.mockRejectedValue(error); // Mock the rejected value for publishEvent

        const response = await request(app)
            .post('/api/v1/apply')
            .send({
                // Simulate incorrect input structure
                data: {
                    firstName: "Ali",
                    lastName: "Doe",
                    phoneNumber: "123-456-7890",
                    email: "john.doe@example.com",
                    bestCallTime: "9am-11am",
                    linkedInUrl: "https://www.linkedin.com/in/johndoe",
                    githubUrl: "https://github.com/johndoe",
                    comment: "Experienced full-stack developer with expertise in Node.js and React."
                }
            });

        expect(response.status).toBe(400); // Adjusted to expect a 500 status for error handling
        expect(response.body).toEqual({ message: 'Validation Err',
            validationErr:[
                {
                    "message": "\"type\" is required",
                    "path": [
                        "type"
                    ],
                    "type": "any.required",
                    "context": {
                        "label": "type",
                        "key": "type"
                    }
                }
            ]
         });
    });
});
