import { TestBed } from "@angular/core/testing";

import { LoginusersService } from "./loginusers.service";

describe("LoginusersService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: LoginusersService = TestBed.get(LoginusersService);
    expect(service).toBeTruthy();
  });
});
