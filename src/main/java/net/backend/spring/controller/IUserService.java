package net.backend.spring.controller;

import net.backend.spring.model.Employee;

public interface IUserService {
	long saveEmployee(Employee emp);
}
