package net.backend.spring.controller;

import java.util.List;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.backend.spring.model.Employee;

import net.backend.spring.repository.EmployeeRepository;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	@Autowired
	private IUserService service;
	
    @Autowired
	private EmployeeRepository employeeRepository;
    
    
    //create user rest API
    @PostMapping("/users")
    public Employee createUser(@RequestBody Employee employee) {
//    	long id = service.saveEmployee(employee);	
//    	System.out.println("here");
		return employeeRepository.save(employee);
    	
    }
    //get all employees
    @GetMapping("/users")
    public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
    	
    }
 
}
