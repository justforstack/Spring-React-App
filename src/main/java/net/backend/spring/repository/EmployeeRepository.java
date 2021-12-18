package net.backend.spring.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.backend.spring.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>{
	//SQL: select * from user where email=?
	Optional<Employee> findByEmail(String email);
}
