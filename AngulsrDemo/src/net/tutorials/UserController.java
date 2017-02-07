package net.tutorials;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
@Path("/UserController")
public class UserController {
	UserDao userDao = new UserDao();

	   @GET
	   @Path("/users")
	   @Produces(MediaType.APPLICATION_XML)
	   public List<User> getUsers(){
	      return userDao.getAllUsers();
	   }	
}
