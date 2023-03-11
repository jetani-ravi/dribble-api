import express, { Router } from 'express';
import { validate } from '../../modules/validate';
import { userController, userValidation } from '../../modules/user';

const router: Router = express.Router();

router
  .route('/')
  .post( validate(userValidation.createUser), userController.createUser)
  .get(validate(userValidation.getUsers), userController.getUsers);

router
  .route('/categories')
  .get(validate(userValidation.getCategories), userController.getCategories)

router
  .route('/:userId')
  .get(validate(userValidation.getUser), userController.getUser)


export default router;

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and retrieval
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a user
 *     description: Only admins can create other users.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - role
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               summary:
 *                 type: string
 *               headline:
 *                 type: string
 *               profileUrl:
 *                 type: string
 *               location:
 *                 type: string
 *               isVerified:
 *                 type: boolean
 *               instagramLink:
 *                 type: string
 *               behanceLink:
 *                 type: string
 *               jobPreferences:
 *                 type: string[]
 *               skills:
 *                 type: string[]
 *               certifications:
 *                 type: object[]
 *               educations:
 *                 type: object[]
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *               role:
 *                  type: string
 *                  enum: [user, admin]
 *             example:
 *               firstName: John
 *               lastName: doe
 *               isVerified: true
 *               headline : "Crafting seamless experiences: Meet the UX Designer"
 *               summary : "Meet Hiren Patel, a skilled UX designer with a passion for creating intuitive and engaging digital experiences. With over [Number] years of experience in the field, Hiren has honed his skills in user research, interaction design, and prototyping to deliver high-quality designs for a diverse range of clients. Throughout his career, Hiren has worked on projects for well-known brands such as [List a few relevant brands], and has a proven track record of delivering user-centered solutions that drive business results. In his free time, Hiren enjoys exploring new design trends and technologies to stay up-to-date with the latest industry developments."
 *               location: "Ireland, USA, Canada, New Zealand, Germany, Russia, France, Japan"
 *               instagramLink: "https://www.instagram.com/john-doe"
 *               behanceLink: "https://www.behance.net/DesignbyMagno"
 *               profileUrl: "https://www.facebook.com/scott.heliker"
 *               portfolio: [
 *                  {
 *                       "url":"https://reqres.in/img/faces/10-image.jpg", 
 *           	            tags : ["adobe illustrator","adobe photoshop"] 
 *                  },
 *                   {
 *                       "url":"https://reqres.in/img/faces/10-image.jpg", 
 *           	            tags : ["adobe illustrator","adobe photoshop"] 
 *                  },                       
 *                  {
 *                       "url":"https://reqres.in/img/faces/10-image.jpg", 
 *           	            tags : ["adobe illustrator","adobe photoshop"] 
 *                  }
 *               ]
 *               certifications: [
 *                {
 *	            	   certificateName: "Masters in brand strategy",
 *	            	    course : "UX Design course",
 *	            	    provider : "Udemy",
 *	            	    date : "2020-04-05T09:30:00.000Z",
 *	                },
 *	                {
 *	            	    certificateName: "Masters in brand strategy",
 *	            	    course : "Product branding strategy",
 *	            	    provider : "coursera",
 *	            	    date : "2018-04-05T14:00:00.000Z",
 *                 }
 *               ]
 *               educations: [ 
 *                  {
 *                   "courseName": "Bachelors of Arts",
 *                   "university" : "Univesity of Florida",
 *                   "country" : "USA",
 *                   "startYear" : 2016,
 *                   "endYear" : 2022
 *                },
 *                 {
 *
 *                  "courseName": "Masters in brand strategy",
 *                   "university" : "Univesity of california",
 *                   "country" : "USA",
 *                   "startYear" : 2017,
 *                   "endYear" : 2020
 *                 }]
 *               skills: ["Content Writer","Researcher","Web Designer","Product designer","Architect","UX Designer","User Researcher"]
 *               jobPreferences: ["Long term","short term"]
 *               email: hirenpatel@gmail.com
 *               password: Tech@2023
 *               role: user
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all users
 *     description: Only admins can retrieve all users.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: skills
 *         schema:
 *           type: string
 *         description: Skills
 *       - in: email
 *         name: email
 *         schema:
 *           type: string
 *         description: Email
 *       - in: query
 *         name: firstName
 *         schema:
 *           type: string
 *         description: first Name
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: projectBy
 *         schema:
 *           type: string
 *         description: project by query in the form of field:hide/include (ex. name:hide)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of users
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */

/**
 * @swagger
 * /users/categories:
 *   get:
 *     summary: Get a user categories
 *     description: .
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */