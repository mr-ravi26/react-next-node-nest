<!-- prettier-ignore-start -->

<h1 align="center">
  Book Store
</h1>

#  Tech Stack 
Frontend
- React  / Next.js
- Typescript 
- PostCSS
- Storybook
 
 Backend
- Nest.js / Express
- Typescript 
- MongoDB / Mongoose
- JSON Web Tokens



# How to use
### Quick Start
```bash
clone repo
cd frontend && yarn dev
cd server && yarn start:dev
```

This project uses atlas as database service and uses JWT for auth.  
To use these systems, simply enter the necessary variables in the .env file.


MongoDB Atlas -> https://docs.atlas.mongodb.com/getting-started


`
.env file location = Book-store/server/.env
`
```
MONGODB_URI=mongodb+srv://rbtri26:31qW1UHqdjCTRBMh@cluster0.diptib4.mongodb.net/book-store?retryWrites=true&w=majority
JWT_SECRET=mr-ravi26/react-next-node-nest

```

# Backend API Documentation
Once the application is running you can visit http://localhost:3001/api to see the Swagger interface.
<!-- prettier-ignore-end -->
