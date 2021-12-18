package net.backend.spring.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import net.backend.spring.model.Employee;
import net.backend.spring.repository.EmployeeRepository;
@Service
public class UserServiceImpl implements IUserService,UserDetailsService{
	@Autowired
	private EmployeeRepository repo;
	
	@Autowired
	private BCryptPasswordEncoder encoder;
	
	@Override
	public long saveEmployee(Employee emp) {
		//read Form Password, encode it
				String encPwd = encoder.encode(emp.getpassword());
				//set back to same object
				emp.setpassword(encPwd);
				
				return repo.save(emp).getId();
	
	}
	public Optional<Employee> findUserByEmail(String email) {
		return repo.findByEmail(email);
	}
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		//fetch user object based on emailId(username)
				Optional<Employee> opt = repo.findByEmail(username);
		//if user not exist 
				if(!opt.isPresent()) {
					throw new UsernameNotFoundException("Username not exist!");
				} else {
					//read model class user
					Employee user = opt.get();

					return new org.springframework.security.core.userdetails
							.User(
									username, user.getpassword(), false, false, false, false, null

									);
				}
	
	
	}

}
