import MockAdapter from "axios-mock-adapter";
import mockUser from "../UserService/mockUser";

export default function mockAxios(axios: any) {
  const mock = new MockAdapter(axios, {
    delayResponse: 300,
    onNoMatch: "passthrough",
  });

  // mock for development purposes
  mockUser(mock);

  return mock;
}
