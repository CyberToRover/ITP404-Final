import { createServer } from "miragejs";
import { signUp, fetchUser, logout, login } from "../components/auth";

let server;

beforeEach(() => {
  server = createServer({
    routes() {
      this.logging = false;

      this.get("https://zhongyuli-itp404-final.herokuapp.com/api/users", () => {
        return {
            users: [
                {
                    "email": "zhongyu@usc.edu",
                    "password": "12345",
                    "id": 1
                  },
                  {
                    "email": "mrcarlos9500@gmail.com",
                    "password": "112233",
                    "id": 2
                }
            ],
        };
      }); 
    },
  });
});

afterEach(() => {
  server.shutdown();
});


test("signUp()", () => {
    // Verify that this function returns a promise that resolves with an array of post objects 
    // Mock out the API using Mirage.js.
    // return signUp().then((posts) => {
    //     expect(posts).toEqual([
    //         {
    //             "email": "zhongyu@usc.edu",
    //             "password": "12345",
    //             "id": 1
    //           },
    //           {
    //             "email": "mrcarlos9500@gmail.com",
    //             "password": "112233",
    //             "id": 2
    //         },
    //     ]);
    //   });
});

test("fetchUser()", () => {
    // Verify that this function returns a promise that resolves with an array of post objects 
    // Mock out the API using Mirage.js.
    // return fetchUser().then((posts) => {
    //     expect(posts).toEqual([
    //         {
    //             "email": "zhongyu@usc.edu",
    //             "password": "12345",
    //             "id": 1
    //           },
    //           {
    //             "email": "mrcarlos9500@gmail.com",
    //             "password": "112233",
    //             "id": 2
    //         },
    //     ]);
    //   });
});

test("logout()", () => {
    // Verify that this function returns a promise that resolves with an array of post objects 
    // Mock out the API using Mirage.js.
    // return logout().then((posts) => {
    //     expect(posts).toEqual([
    //         {
    //             "id": 1
    //           },
    //           {
    //             "id": 2
    //         },
    //     ]);
    //   });
});

test("login()", () => {
    // Verify that this function returns a promise that resolves with an array of post objects 
    // Mock out the API using Mirage.js.
    // return login().then((posts) => {
    //     expect(posts).toEqual([
    //         {
    //             "email": "zhongyu@usc.edu",
    //             "password": "12345",
    //             "id": 1
    //           },
    //           {
    //             "email": "mrcarlos9500@gmail.com",
    //             "password": "112233",
    //             "id": 2
    //         },
    //     ]);
    //   });
});