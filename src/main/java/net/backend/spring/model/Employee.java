package net.backend.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="users")
public class Employee {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;
	
   @Column(name="user_name")
   private String username;
   
   @Column(name="password")
   private String password;
   
   @Column(name="email_id")
   private String email;

public Employee(){
	
}
public Employee(String username, String password, String email) {
	super();
	this.username = username;
	this.password = password;
	this.email = email;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getusername() {
	return username;
}
public void setusername(String username) {
	this.username = username;
}
public String getpassword() {
	return password;
}
public void setpassword(String password) {
	this.password = password;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
}
